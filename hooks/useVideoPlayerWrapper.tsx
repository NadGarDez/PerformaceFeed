import { useVideoPlayer, VideoPlayer } from "expo-video";
import { useEffect, useRef } from "react";

const configFunction = (player: VideoPlayer) => {
    player.audioMixingMode = 'mixWithOthers';

    player.loop = false;
    player.volume = 1.0;
};

interface options {
    uri: string,
    isActive: boolean,
    initialization: number,
    cleanUp?: (currentTime: number) => void
}

export const useVideoPlayerWrapper = (options: options): VideoPlayer | null => {
    const { initialization = 0, uri, isActive, cleanUp } = options;

    const lastTimeSaved = useRef(initialization);

    const player = useVideoPlayer(uri, configFunction);

    useEffect(() => {
        if (!player) return;

        let intervalId = null;

        if (isActive) {
            player.currentTime = lastTimeSaved.current
            player.play();
            intervalId = setInterval(() => {
                lastTimeSaved.current = player.currentTime;
            }, 2500);

        } else {
            player.pause();
            lastTimeSaved.current = player.currentTime;
        }

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }

            if (cleanUp) {
                cleanUp(lastTimeSaved.current);
            }
        };
    }, [player, isActive, cleanUp]);

    return player;
};