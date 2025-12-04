import { source } from "@/types";
import React, { memo, useMemo } from "react";

import { StyleSheet, View } from "react-native";
import { CarouselImage } from "./sub/CarouselImage";
import { VideoPlayer } from "./sub/VideoPlayer";

const styles = StyleSheet.create({
    container: {
       flex:1,
        alignItems: 'center',
    justifyContent: 'center',

    },
});



interface props {
    source:source
}


const sourceSelector: Record<'image' | 'video', React.ComponentType<any>> = {
    image: CarouselImage,
    video: VideoPlayer
}

export const CarouselItem = memo(
    (props:props): React.JSX.Element => {
        
        const {source} = props


        const Source = useMemo(
            () => {
                return sourceSelector[source.type]
            },
            [source]
        )
        console.log(source.url)

        return (
            <View style={styles.container}>
                <VideoPlayer uri="https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4" />
            </View>
        );
    }
)




