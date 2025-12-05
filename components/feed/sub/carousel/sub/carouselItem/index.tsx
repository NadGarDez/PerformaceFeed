import { source } from "@/types";
import React, { memo, useCallback, useMemo, useRef } from "react";

import { getProgress, saveProgress } from "@/utils/videoUtils";
import { Alert, StyleSheet, View } from "react-native";
import Video, { OnLoadData, OnProgressData, VideoRef } from 'react-native-video';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#7a7575ff'

    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    }
});

interface props {
    source: source,
    itemStatus: 'active' | 'prepared' | 'unmounted'
}

export const CarouselItem = memo(
    (props: props): React.JSX.Element => {

        const { source, itemStatus } = props
        const videoRef = useRef<VideoRef>(null);
        const loadStartTimeRef = useRef<number | null>(null);

        const handlePlaybackStart = useCallback(() => {
            if (loadStartTimeRef.current !== null) {
                const timeToFirstFrameMs = Date.now() - loadStartTimeRef.current;
                console.log(`TIME_TO_FIRST_FRAME: ${timeToFirstFrameMs}ms, ID: ${source.id}`);
                loadStartTimeRef.current = null;
            }
            console.log(`PLAYBACK_START: ID: ${source.id}`);
        }, [source.id]);

        const handlePlaybackCompletion = useCallback(() => {
            console.log(`PLAYBACK_COMPLETION: ID: ${source.id}`);
        }, [source.id]);

        const handleLoadStart = useCallback(() => {
            loadStartTimeRef.current = Date.now();
        }, []);

        const handleError = useCallback((error: any) => {
            const errorMessage = `ID del Video: ${source.id} / URL del Video: ${source.url} / Detalles del Error: ${JSON.stringify(error)}
            `;

            Alert.alert(
                '¡Error al Cargar Video!',
                errorMessage,
                [{ text: 'Aceptar' }]
            );
        }, [source.id, source.url]);

        const handleProgress = useCallback(async (data: OnProgressData) => {
            await saveProgress(source.id, data.currentTime);
        }, [source.id]);


        const maxBuffer = useMemo(
            () => {
                if (itemStatus === 'unmounted') return 0;
                return 1000
            },
            [itemStatus]
        )

        const handleOnLoad = useCallback(
            async (data: OnLoadData) => {
                const videoProgress = await getProgress(source.id);
                if (videoProgress && videoProgress > 0) {
                    videoRef.current?.seek(videoProgress);
                }
            },
            [source.id]
        )

        const videoSource = useMemo(() => ({
            uri: source.url,
            bufferConfig: {
                maxBufferMs: maxBuffer
            }
        }), [source.url, maxBuffer]);

        return (
            <View style={styles.container}>
                <Video
                    source={videoSource}
                    onProgress={handleProgress}
                    onLoad={handleOnLoad}
                    onLoadStart={handleLoadStart}
                    onReadyForDisplay={handlePlaybackStart}
                    onEnd={handlePlaybackCompletion}
                    progressUpdateInterval={3000}
                    ref={videoRef}
                    onError={handleError}
                    style={styles.video}
                    paused={itemStatus !== 'active'}
                    key={source.id}
                    resizeMode="cover"
                />
            </View>
        );
    }
)