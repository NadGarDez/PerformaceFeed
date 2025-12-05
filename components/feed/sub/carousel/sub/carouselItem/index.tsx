import { source } from "@/types";
import React, { memo, useCallback, useMemo, useRef } from "react";

import { getProgress, saveProgress } from "@/utils/videoUtils";
import { StyleSheet, View } from "react-native";
import Video, { OnProgressData, VideoRef } from 'react-native-video';

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

        const handleError = useCallback((error: any) => {
            console.error('Error en video:', error);
        }, []);

        const handleProgress = useCallback(async (data: OnProgressData) => {
            await saveProgress(source.id, data.currentTime);
        }, [source.id]);


        const maxBuffer = useMemo(
            () => {
                if (itemStatus === 'active') return 5000;
                else if (itemStatus === 'prepared') return 2000
                return 0
            },
            [itemStatus]
        )

        const handleOnLoad = useCallback(
            async () => {
                const videoProgress = await getProgress(source.id);
                console.log(videoProgress)
                if (videoProgress && videoProgress > 0) {
                    videoRef.current?.seek(videoProgress);
                }
            },
            [source.id, itemStatus]
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
                    progressUpdateInterval={3000}
                    ref={videoRef}
                    onError={handleError}
                    style={styles.video}
                    paused={itemStatus !== 'active'}
                    key={source.id}
                />
            </View>
        );
    }
)