import React, { JSX } from "react";

import { flexboxStyles } from "@/styles/flexbox";
import { StyleSheet, View } from "react-native";
import { Avatar } from "./sub/Avatar";
import { Carousel } from "./sub/Carousel";
import { FeedHeader } from "./sub/FeedHeader";
import { Footer } from "./sub/Footer";
import { Resposted } from "./sub/Resposted";
import { StatisticsAndButton } from "./sub/StatisticsAndButton";

const styles = StyleSheet.create({
    container: {
       
    },

    repostContainer: {
        marginTop: 8,
        ...flexboxStyles.row,
    },
    restContainer: {
        marginTop: 12,
        ...flexboxStyles.row,
    },
    dataContainer: {    
        marginLeft: 8,
        ...flexboxStyles.column,
    },
});
export const Feed = (): JSX.Element => {
    return (
        <View style={flexboxStyles.column}>
            <View style={styles.repostContainer}>
                <Resposted />
            </View>
            <View style={styles.restContainer}>
                <Avatar />
                <View style={styles.dataContainer}>
                    <FeedHeader />
                    <Carousel />
                    <StatisticsAndButton /> 
                </View>
            </View>
            <Footer/>
        </View>
    );
}