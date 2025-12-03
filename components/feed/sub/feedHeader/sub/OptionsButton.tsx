import React, { JSX } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const OptionsButton = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>OptionsButton Component</Text>
        </View>
    );
}
