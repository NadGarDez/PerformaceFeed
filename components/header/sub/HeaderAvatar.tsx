import React, { JSX } from "react";

import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarCircle: {
        width: 46,
        height: 46,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#ff8501',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});


const urlImageAvatar = 'https://example.com/avatar.jpg';

const image = require('../../../assets/profile/profileImage.jpg');

export const HeaderAvatar = (): JSX.Element => {
    return (
        <View style={styles.container}>
           <View style={styles.avatarCircle}>
              <Image style={styles.avatar} source={image} />
           </View>
        </View>
    );
}