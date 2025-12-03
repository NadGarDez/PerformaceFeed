import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX, useState } from "react";
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
    container: {
       ...flexboxStyles.rowFlexEndCenter
    },
    following: {
        ...flexboxStyles.rowPerfectCenter,
        borderWidth: 1,
        borderColor: '#1DA1F2',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    followingButtonTextStyle: {
        color: '#1DA1F2',
        fontSize: 14,
        fontWeight: '600',
    },
    followButtonStyle: {
        backgroundColor: '#1DA1F2',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    followButtonTextStyle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});

const randomFollowed = Math.random() < 0.5;

export const FollowUnFollowButton = (): JSX.Element => {
    const [isFollowing, setIsFollowing] = useState<boolean>(randomFollowed);
    const [scaleAnim] = useState(new Animated.Value(1));

    const handleToggleFollow = () => {
        // Animación de pulsación
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.95,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();

        // Cambiar estado
        setIsFollowing(!isFollowing);
    };

    return (
        <TouchableOpacity 
            onPress={handleToggleFollow}
            activeOpacity={0.8}
            style={styles.container}
        >
            <Animated.View 
                style={[
                    isFollowing ? styles.following : styles.followButtonStyle,
                    { transform: [{ scale: scaleAnim }] }
                ]}
            >
                <Text style={isFollowing ? styles.followingButtonTextStyle : styles.followButtonTextStyle}>
                    {isFollowing ? 'Following' : 'Follow'}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
}