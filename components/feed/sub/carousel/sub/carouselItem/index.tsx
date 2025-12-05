import { source } from "@/types";
import React, { memo, useCallback, useEffect, useState } from "react";

import { useVideoContext } from "@/context/VideoContext";
import { StyleSheet, View } from "react-native";
import { VideoPlayer } from "./sub/VideoPlayer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

interface props {
    source: source,
    itemStatus: 'active' | 'prepared' | 'unmounted'
}

export const CarouselItem = memo(
    (props: props): React.JSX.Element => {

        const [lastSavedPoint, setLastSavedPoint] = useState<number>(0)

        const { getProgress, saveProgress } = useVideoContext()

        const { source, itemStatus } = props

        useEffect(
            () => {
                setLastSavedPoint(getProgress(source.id) ?? 0)

            },
            [getProgress, setLastSavedPoint, source]
        )

        const cleanUp = useCallback(
            (currentTime: number)=> {
                console.log('cleanup', source.id)
                setLastSavedPoint(currentTime);
                saveProgress(source.id, currentTime)
            },
            [setLastSavedPoint, saveProgress , source]
        )

        console.log('last save point:',lastSavedPoint, source.id)

        if (itemStatus === 'unmounted') return <></>

        return (
            <View style={styles.container}>
                <VideoPlayer uri={source.url} isActive={itemStatus === 'active'} initialization={lastSavedPoint} cleanUp={cleanUp}/>
            </View>
        );
    }
)




