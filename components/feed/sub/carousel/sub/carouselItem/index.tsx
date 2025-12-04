import { source } from "@/types";
import React, { memo, useMemo } from "react";

import { StyleSheet, View } from "react-native";
import { CarouselImage } from "./sub/CarouselImage";
import { VideoPlayer } from "./sub/VideoPlayer";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
});

const images = [
    'https://cdn.pixabay.com/photo/2025/11/26/15/14/15-14-15-273_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/11/26/15/15/15-15-04-191_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/12/01/09/00/09-00-38-98_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/08/owl-275942_1280.jpg',]


const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

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


        return (
            <View style={styles.container}>
                <Source uri={source.url}/>
            </View>
        );
    }
)




