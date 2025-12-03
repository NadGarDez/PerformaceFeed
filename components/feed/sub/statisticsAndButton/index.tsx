import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { StyleSheet, Text, View } from "react-native";
import { MessageButton } from "./sub/MessageButton";
import { ShareButton } from "./sub/ShareButton";
import { ThreeDotsButton } from "./sub/ThreeDotsButton";
import { ToogleableHeartButton } from "./sub/ToggeableHeartButton";

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.row,
    },
    iconPlusStaticContainer: {
        marginRight: 16,
        ...flexboxStyles.row,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    iconContainer: {
        marginRight: 4
    },

    statisticsText: {
        fontSize: 14,
        color: '#666666',
    },
    optionsContainer: {
        ...flexboxStyles.row,
        flexGrow:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});


const randomLikeNumber = Math.floor(Math.random() * 1000);
const randomMessageNumber = Math.floor(Math.random() * 2000)
const randomShareNumber = Math.floor(Math.random() * 3000)


export const StatisticsAndButton = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.iconPlusStaticContainer}>
                <View style={styles.iconContainer}>
                    <ToogleableHeartButton />
                </View>
                <Text style={styles.statisticsText}>
                    {randomLikeNumber}
                </Text>
            </View>
            <View style={styles.iconPlusStaticContainer}>
                <View style={styles.iconContainer}>
                    <MessageButton />
                </View>
                <Text style={styles.statisticsText}>
                    {randomMessageNumber}
                </Text>
            </View>
            <View style={styles.iconPlusStaticContainer}>
                <View style={styles.iconContainer}>
                    <ShareButton />
                </View>
                <Text style={styles.statisticsText}>
                    {randomShareNumber}
                </Text>
            </View>
            <View style={styles.optionsContainer}>
                <ThreeDotsButton />
            </View>


        </View>
    );
}