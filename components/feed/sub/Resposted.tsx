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

export const Resposted = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Resposted Component</Text>
        </View>
    );
}