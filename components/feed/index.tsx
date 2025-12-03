import React, { JSX } from "react";

import { userStaticData } from "@/constants/staticData";
import { flexboxStyles } from "@/styles/flexbox";
import { getRandomUserInfoFromStaticData } from "@/utils";
import { StyleSheet, View } from "react-native";
import { Carousel } from "./sub/carousel";
import { DescriptionText } from "./sub/description";
import { FeedHeader } from "./sub/feedHeader/index";
import { StatisticsAndButton } from "./sub/statisticsAndButton";


const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.column,
        paddingHorizontal: 16,
    },

    headerContaienr: {
        marginBottom: 8,
    },

    carouselContainer: {
        marginBottom: 8,
    },

    statisticsAndButtonContainer: {
        marginBottom: 8,
    },

    footerContainer: {
        marginBottom: 16,
    },


});


const userInfo = getRandomUserInfoFromStaticData(userStaticData);
export const Feed = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContaienr}>
                <FeedHeader {...userInfo} />
            </View>
            <View style={styles.carouselContainer}>
               <Carousel />
            </View>
            <View style={styles.statisticsAndButtonContainer}>
                <StatisticsAndButton />
            </View>
            <View style={styles.footerContainer}>
              <DescriptionText />
            </View>
        </View>
    );
}