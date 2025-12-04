import { BasicUserInfo } from "@/types";
import React, { JSX, memo } from "react";

import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },


    seenAvatarStory: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
    },

    unseenAvatarStory: {
        width: 46,
        height: 46,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#ff8501',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});



export const SmallAvatar = memo(
    (props: BasicUserInfo): JSX.Element => {

        const { seen, imageUri } = props
        return (
            <View style={styles.container}>
                <View style={seen ? styles.seenAvatarStory : styles.unseenAvatarStory}>
                    <Image style={styles.avatar} source={{ uri: imageUri }} />
                </View>
            </View>
        );
    }
)



