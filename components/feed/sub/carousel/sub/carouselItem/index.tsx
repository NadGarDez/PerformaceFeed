import { source } from "@/types";
import React, { memo } from "react";

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

        const { source, itemStatus } = props

        if(itemStatus === 'unmounted') return <></>

        return (
            <View style={styles.container}>
                <VideoPlayer uri={source.url} isActive={itemStatus === 'active'} />
            </View>
        );
    }
)




