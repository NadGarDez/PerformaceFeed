import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { JSX, memo } from 'react';
import { Button, StyleSheet, View } from 'react-native';


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

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
      <View style={styles.contentContainer}>
        <VideoView style={styles.video} player={player} />
        <View style={styles.controlsContainer}>
          <Button
            title={isPlaying ? 'Pause' : 'Play'}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
      </View>
    );
  }
)

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: '100%',
    height: 300,
    borderRadius: 10
  },
  controlsContainer: {
    padding: 10,
  },
});