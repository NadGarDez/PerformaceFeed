import { staticPosts } from "@/constants/staticData";
import { FlashList } from "@shopify/flash-list";
import React, { JSX } from "react";
import { StyleSheet } from "react-native";
import { Feed } from "../feed";


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})


export const FeedList = ():JSX.Element => {
    return (
        <FlashList 
            data={staticPosts}
            renderItem={({item})=><Feed  {...item}/>}
            keyExtractor={(_, index) => `feed_${index}`} 
            style={styles.container}
        />
    )
}