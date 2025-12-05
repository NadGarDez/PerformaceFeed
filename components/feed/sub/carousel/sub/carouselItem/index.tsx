import { source } from "@/types";
import React, { memo, useCallback, useMemo, useRef } from "react";

import { useVideoContext } from "@/context/VideoContext";
import { StyleSheet, View } from "react-native";
import Video, { OnProgressData, VideoRef } from 'react-native-video';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden'

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


        const { getProgress, saveProgress } = useVideoContext()

        const { source, itemStatus } = props

        const videoRef = useRef<VideoRef>(null);

        const handleError = useCallback((error: any) => {
            console.error('Error en video:', error);
        }, []);

        const handleProgress = useCallback((data: OnProgressData) => {
            saveProgress(source.id, data.currentTime);

        }, [itemStatus, saveProgress, source.id]);


        const maxBuffer = useMemo(
            () => {
                if (itemStatus === 'active') return 5000;
                else if (itemStatus === 'prepared') return 2000
                return 0
            },
            [itemStatus]

        )


        const handleOnLoad = useCallback(
            () => {
                const progress = getProgress(source.id)
                if(!!progress && progress > 0 )  videoRef.current?.seek(progress);
            },
            [getProgress, source.id, videoRef]
        )

        return (
            <View style={styles.container}>
                <Video
                    source={{
                        uri: source.url, bufferConfig: {
                            maxBufferMs: maxBuffer
                        }
                    }}
                    onProgress={
                        handleProgress
                    }
                    onLoad={handleOnLoad}
                    progressUpdateInterval={3000}
                    ref={videoRef}
                    onError={handleError}
                    style={styles.video}
                    paused={itemStatus !== 'active'}
                />
            </View>
        );
    }
)




