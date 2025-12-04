import { useVideoPlayerWrapper } from '@/hooks/useVideoPlayerWrapper';
import { VideoView } from 'expo-video';
import { JSX, memo } from 'react';
import { StyleSheet, View } from 'react-native';


interface props {
  uri: string,
  cleanUp?: (currentTime: number) => void,
  isActive: boolean
}

export const VideoPlayer = memo(
  (props: props): JSX.Element => {

    const { uri, isActive } = props;
    const player = useVideoPlayerWrapper({
      uri,
      isActive,
      initialization: 0
    })

    if (!player) return <></>

    return (
      <View style={styles.contentContainer}>
        <VideoView style={styles.video} player={player} />
      </View>
    );
  }
)

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 15,
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: '100%',
  },

});