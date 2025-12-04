import React, { JSX } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Feed } from "../feed";


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

const feedsNumber = Array(50).fill(0);

export const FeedList = ():JSX.Element => {
    return (
        <FlatList 
            data={feedsNumber}
            renderItem={()=><Feed />}
            keyExtractor={(_, index) => `feed_${index}`} 
        />
    )
}