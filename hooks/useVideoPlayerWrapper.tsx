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

    const currentTimeRef = useRef(initialization);

    const player = useVideoPlayer(uri, voidFunction);

    useEffect(() => {
        if (!player) return; 

        if (isActive) {
            if (currentTimeRef.current > 0) {
                player.currentTime = currentTimeRef.current;
            }
            player.play();
        } else {
            player.pause();
            currentTimeRef.current = player.currentTime;
        }

        return () => {
            player.pause();
            const finalTime = player.currentTime;
            currentTimeRef.current = finalTime; 
            
            if (cleanUp) {
                cleanUp(finalTime);
            }
        };
    }, [player, isActive, cleanUp]);

    return player;
};