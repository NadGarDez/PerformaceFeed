import React, { JSX } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const FILE_NAME = 'ExploreScreen';

export default function ExploreScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Current file</Text>
                <Text style={styles.filename}>{FILE_NAME}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        color: '#374151',
        marginBottom: 6,
    },
    filename: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
});