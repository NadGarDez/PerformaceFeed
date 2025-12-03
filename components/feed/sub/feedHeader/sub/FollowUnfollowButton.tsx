import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
       ...flexboxStyles.rowFlexEndCenter
    },
    following: {
        ...flexboxStyles.rowPerfectCenter,
        borderWidth: 1,
        borderColor: '#1DA1F2',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    followingButtonTextStyle: {
        color: '#1DA1F2',
        fontSize: 14,
        fontWeight: '600',
    },
    followButtonStyle: {
        backgroundColor: '#1DA1F2',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    followButtonTextStyle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },

});

const randomFollowed = Math.random() < 0.5;

export const FollowUnFollowButton = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {
                !randomFollowed  ? (
                    <View style={styles.followButtonStyle}>
                        <Text style={styles.followButtonTextStyle}>Follow</Text>
                    </View>
                ) : (
                <View style={styles.following}>
                    <Text style={styles.followingButtonTextStyle}>Following</Text>
                </View>
                )
            }
        </View>

    );
}