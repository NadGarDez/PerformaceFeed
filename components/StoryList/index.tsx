import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { userStaticData } from "@/constants/staticData";
import { BasicUserInfo } from "@/types/user";
import { StyleSheet, View, VirtualizedList } from "react-native";
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
            <VirtualizedList<BasicUserInfo>    
                data={staticData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
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

