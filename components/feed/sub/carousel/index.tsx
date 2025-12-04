import React from "react";

import { StyleSheet } from "react-native";
import PagerView from 'react-native-pager-view';
import { CarouselVideo } from "./sub/CarouselVideo";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 300
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


const numberOfVideos = Array(10).fill(0);

export const Carousel = (): React.JSX.Element => {
    return (
        // <View style={styles.container}>
            <PagerView initialPage={0} style={styles.container}>
                {
                    numberOfVideos.map(
                        (item, index) => (
                            <CarouselVideo key={index} />
                        )
                    )
                }

            </PagerView>
        // </View>
    );
}
