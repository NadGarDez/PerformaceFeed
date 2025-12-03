import { SmallAvatar } from "@/components/ui/SmallAvatar";
import { SocialInfo } from "@/components/ui/SocialInfo";
import { flexboxStyles } from "@/styles/flexbox";
import { BasicUserInfo } from "@/types/user";
import React, { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { FollowUnFollowButton } from "./sub/FollowUnfollowButton";

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.row,
        maxHeight: 50,
        width: '100%',
    },
    avatarContainer: {
        marginRight: 10,
    },
});



export const FeedHeader = (props: BasicUserInfo): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <SmallAvatar {...props}/>
            </View>
            <SocialInfo {...props}/>
            <FollowUnFollowButton />
        </View>
    );
}