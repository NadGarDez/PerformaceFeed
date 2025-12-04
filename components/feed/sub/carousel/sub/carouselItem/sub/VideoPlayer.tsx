import { useVideoPlayer, VideoView } from 'expo-video';
import { JSX, memo } from 'react';
import { StyleSheet, View } from 'react-native';


interface props {
  uri: string
}

export const VideoPlayer = memo(
  (props: props): JSX.Element => {


    const { uri } = props;
    const player = useVideoPlayer(uri, player => {
      player.loop = true;
      player.play();
    });

    return (
      <View style={styles.contentContainer}>
        <VideoView style={styles.video} player={player} />
      </View>
    );
  }
)

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    borderRadius: 10
  },
 
});