import { useVideoPlayer, VideoPlayer } from "expo-video";
import { useEffect, useRef } from "react";

const voidFunction = (player: VideoPlayer) => { };

interface options {
    uri: string,
    isActive: boolean,
    initialization: number,
    cleanUp?: (currentTime: number) => void
}

export const useVideoPlayerWrapper = (options: options): VideoPlayer | null => {
    const { initialization, uri, isActive, cleanUp } = options;

    const lastTimeSaved = useRef(initialization);

    const player = useVideoPlayer(uri, voidFunction);

    useEffect(() => {
        if (!player) return;

        let intervalId = null;

        if (isActive) {
            // player.play();

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