import { Header } from '@/components/header';
import React, { JSX } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const FILE_NAME = 'HomeScreen';

export default function HomeScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
           <Header />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
});