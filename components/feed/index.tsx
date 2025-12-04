import React, { JSX, memo } from "react";

import { flexboxStyles } from "@/styles/flexbox";
import { Post } from "@/types";
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

type props = Post & {
    rule: number
}

export const Feed = memo(
    (props: props): JSX.Element => {
        const { user, data: {sources, description , ...rest} , rule} = props;
        return (
            <View style={styles.container}>
                <View style={styles.headerContaienr}>
                    <FeedHeader {...user} />
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel rule={rule} sources={sources}/>
                </View>
                <View style={styles.statisticsAndButtonContainer}>
                    <StatisticsAndButton {...rest}/>
                </View>
                <View style={styles.footerContainer}>
                    <DescriptionText  text={description}/>
                </View>
            </View>
        );
    }
)


