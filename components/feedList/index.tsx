import { staticPosts } from "@/constants/staticData";
import { FlashList } from "@shopify/flash-list";
import React, { JSX, useCallback, useState } from "react";
import { StyleSheet, ViewToken } from "react-native";
import { Feed } from "../feed";


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export const FeedList = (): JSX.Element => {

    const [visibleItem, setVisibleItem] = useState<number>(0);

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        const newVisibleIndex = viewableItems
            .filter(item => item.isViewable)
            .map((item) => {
                return item.index
            });

        setVisibleItem(newVisibleIndex[0] ?? 0)
    }, []);

    const ruleCalculation = useCallback(
        (feedIndex:number) => {
            if(feedIndex === visibleItem) return 0;
            if(feedIndex -1 === visibleItem) return 1; 
            return 2
        },
        [visibleItem]
    )


    return (
        <FlashList
            data={staticPosts}
            renderItem={({ item, index }) => <Feed rule={ruleCalculation(index)} {...item} />}
            keyExtractor={(_, index) => `feed_${index}`}
            style={styles.container}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 250,
            }}
        />
    )
}