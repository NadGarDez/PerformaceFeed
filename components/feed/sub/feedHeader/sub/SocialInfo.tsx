import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

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

interface props {
    userName: string;
    userHandle: string;
}

export const SocialInfo = (props:props): JSX.Element => {
    const { userName , userHandle} = props;
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.userNameTextStyle}>{userName}</Text>
                <Text style={styles.userHandleTextStyle}>{userHandle}</Text>
            </View>
        </View>
    );
}