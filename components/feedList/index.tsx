import { FlashList } from "@shopify/flash-list";
import React, { JSX } from "react";
import { StyleSheet } from "react-native";
import { Feed } from "../feed";


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

const feedsNumber = Array(200).fill(0);

export const FeedList = ():JSX.Element => {
    return (
        <FlashList 
            data={feedsNumber}
            renderItem={()=><Feed />}
            keyExtractor={(_, index) => `feed_${index}`} 
            style={styles.container}
        />
    )
}