import React, { JSX } from "react";
import { StyleSheet, VirtualizedList } from "react-native";
import { Feed } from "../feed";


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})


const feedsNumber = Array(50).fill(0);
const getItemCount = (_data: unknown) => feedsNumber.length;


export const FeedList = ():JSX.Element => {
    return (
        <VirtualizedList 
            data={feedsNumber}
            renderItem={()=><Feed />}
            keyExtractor={(item, index) => `feed_${index}`}
            getItemCount={getItemCount}
            getItem={(item)=> item}
        />
    )
}