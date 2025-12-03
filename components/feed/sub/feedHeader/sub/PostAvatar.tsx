import React, { JSX } from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    seenAvatarStory: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
    },

    unseenAvatarStory: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 2,
        borderColor: '#ff8501',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#999999',
    },

});

interface props {
    imageUri: string;
    unseenStory: boolean;
}

export const PostAvatar = (props: props): JSX.Element => {
    return (
        <View
            style={props.unseenStory ? styles.unseenAvatarStory : styles.seenAvatarStory}
        >

            <Image
                source={{ uri: props.imageUri }}
                style={styles.avatar}
            />

        </View>
    );
}