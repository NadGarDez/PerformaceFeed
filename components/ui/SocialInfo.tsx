import { flexboxStyles } from "@/styles/flexbox";
import { BasicUserInfo } from "@/types";
import React, { JSX, memo } from "react";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.flex1,
        ...flexboxStyles.justifyContentCenter,

    },
    textContainer: {
        ...flexboxStyles.columJustifyCenterFlexStart,
    },
    userNameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    userHandleTextStyle: {
        fontSize: 14,
        color: '#666666',
    },
});



export const SocialInfo = memo(
    (props: BasicUserInfo): JSX.Element => {

        const { name, username } = props;

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.userNameTextStyle}>{name}</Text>
                    <Text style={styles.userHandleTextStyle}>{username}</Text>
                </View>
            </View>
        );
    }
)


