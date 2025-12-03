import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { userStaticData } from "@/constants/staticData";
import { getRandomUserInfoFromStaticData } from "@/utils";
import { StyleSheet, View } from "react-native";
import { SmallAvatar } from "../ui/SmallAvatar";
import { SocialInfo } from "../ui/SocialInfo";
import { PlatformTitle } from "./sub/PlatformTitle";


const styles = StyleSheet.create({
    container: {
       ...flexboxStyles.row,
       ...flexboxStyles.alignItemsCenter,
       paddingHorizontal: 16,
       paddingVertical: 12,
       width: '100%',
       minHeight: 70,
    },
    avatarContainer: {
        marginRight: 10,
    },
    socialInfoContainer: {
        ...flexboxStyles.flex1
    },
    platformTitleContainer: {
        marginBottom: 4,
    },
});

const userInfo = getRandomUserInfoFromStaticData(userStaticData)

export const Header = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <SmallAvatar {...userInfo}/>
            </View>
            <View style={styles.socialInfoContainer}>
                <SocialInfo  {...userInfo}/>
            </View>
            <View style={styles.platformTitleContainer}>
                <PlatformTitle />
            </View>
        </View>
    );
}