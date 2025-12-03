import { FeedHeader } from '@/components/feed/sub/feedHeader/index';
import { Header } from '@/components/header';
import { StoryList } from '@/components/StoryList';
import { userStaticData } from '@/constants/staticData';
import { flexboxStyles } from '@/styles/flexbox';
import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const FILE_NAME = 'HomeScreen';


export default function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.stateHorizontalListContainer}>
        <StoryList />
      </View>
        <FeedHeader {...userStaticData[0]} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stateHorizontalListContainer: {
    marginVertical: 10,
    ...flexboxStyles.row,
    width: '100%',
  }

});