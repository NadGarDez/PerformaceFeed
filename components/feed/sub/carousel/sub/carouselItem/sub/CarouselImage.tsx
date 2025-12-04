import React, { JSX } from "react";

import { Image, StyleSheet } from 'react-native';

interface  props {
    uri:string
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10
    }
})

export const CarouselImage = (props:props):JSX.Element=> {

    const {uri} = props;

    return (
        <Image source={{uri}} 
            style ={styles.image}
        />
    );
}