import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";


import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.column,
        ...flexboxStyles.alignItemsCenter
    },

    seenCircle: {
        width: 73,
        height: 73,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    unseenCircle: {
        width: 73,
        height: 73,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#ff8501',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#9ca3af',
    },

    usernameText: {
        marginTop: 4,
        fontSize: 12,
        color: '#374151',
    },
});

interface props {
    imageUri: string;
    seen: boolean;
    username: string;
}

export const UserState = (props: props): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={props.seen ? styles.seenCircle : styles.unseenCircle}>
                <Image source={{ uri: props.imageUri }} style={styles.avatar} />
            </View>
            <View>
                <Text style={styles.usernameText} numberOfLines={1}>{props.username}</Text>
            </View>
        </View>
    );
}