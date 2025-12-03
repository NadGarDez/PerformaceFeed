import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { StyleSheet, View } from "react-native";
import { HeaderAvatar } from "./sub/HeaderAvatar";
import { PlatformTitle } from "./sub/PlatformTitle";
import { SocialInfo } from "./sub/SocialInfo";


const styles = StyleSheet.create({
    container: {
       ...flexboxStyles.row,
       ...flexboxStyles.alignItemsCenter,
       paddingHorizontal: 16,
       paddingVertical: 12,
       width: '100%',
       minHeight: 70,
    },
    avatarContainer: {
        marginRight: 10,
    },
    socialInfoContainer: {
        ...flexboxStyles.flex1
    },
    platformTitleContainer: {
        marginBottom: 4,
    },
});

export const Header = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <HeaderAvatar />
            </View>
            <View style={styles.socialInfoContainer}>
                <SocialInfo />
            </View>
            <View style={styles.platformTitleContainer}>
                <PlatformTitle />
            </View>
        </View>
    );
}