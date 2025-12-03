import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { StyleSheet, View } from "react-native";
import { PostAvatar } from "./sub/PostAvatar";

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.row,
        ...flexboxStyles.alignItemsCenter,
        maxHeight: 50,
        paddingHorizontal: 16,
    },
});

const getRandomStoryStatus = (): boolean => {
    return Math.random() < 0.5;
}

const getRandomAvatarFromUriArray = (): string => {
    const avatarUris = [
        "https://example.com/user/avatar1.jpg",
        "https://example.com/user/avatar2.jpg",
        "https://example.com/user/avatar3.jpg",
        "https://example.com/user/avatar4.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * avatarUris.length);
    return avatarUris[randomIndex];
}


export const FeedHeader = (): JSX.Element => {
    return (
        <View style={styles.container}>
           <PostAvatar imageUri={getRandomAvatarFromUriArray()} unseenStory={getRandomStoryStatus()} />
        </View>
    );
}