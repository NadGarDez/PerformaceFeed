import React, { JSX } from "react";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: '900',
        fontFamily: 'Satisfy-Regular',
    },
});

export const PlatformTitle = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Performance Feed</Text>
        </View>
    );
}       