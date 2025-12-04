import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { userStaticData } from "@/constants/staticData";
import { BasicUserInfo } from "@/types";
import { FlatList, StyleSheet, View } from "react-native";
import { UserStory } from "./sup/UserStory";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: 100,
        overflow: 'hidden',
        ...flexboxStyles.row
    },
    firtsItemMargin: {
        marginLeft: 16,
    },
    lastItemMargin: {
        marginRight: 16,
        marginLeft: 10   
    },
    centralItemMargin: {
        marginLeft: 10,
    },
});


const staticData = userStaticData.slice(-10);

export const StoryList = (): JSX.Element => {

    return (
        <View style={styles.container}>
            <FlatList<BasicUserInfo>    
                data={staticData}
                horizontal
                keyExtractor={({id}, index) => `story_item_${id}`}
                renderItem={({ item , index}) => (
                    <View style={[
                        index === 0 ? styles.firtsItemMargin : index === staticData.length -1 ? styles.lastItemMargin : styles.centralItemMargin
                    ]} >
                        <UserStory {...item} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}