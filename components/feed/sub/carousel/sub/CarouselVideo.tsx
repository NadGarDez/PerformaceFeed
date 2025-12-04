import React, { memo } from "react";

import { Image, StyleSheet, View } from "react-native";

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

export const CarouselVideo = memo(
    (): React.JSX.Element => {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: getRandomImage() }}
                    style={{ width: '100%', height: 300, borderRadius: 10 }}
                />
            </View>
        );
    }
)




