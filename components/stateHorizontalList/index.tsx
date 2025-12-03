import { flexboxStyles } from "@/styles/flexbox";
import React, { JSX } from "react";

import { StyleSheet, View, VirtualizedList } from "react-native";
import { UserState } from "./sup/UserState";

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
    },
    centralItemMargin: {
        marginHorizontal: 8,
    },
});

interface UserStateData {
    imageUri: string;
    seen: boolean;
    username: string;
}

const staticData: UserStateData[] = [
        { imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg', seen: false, username: 'Michael' },
        { imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg', seen: true, username: 'John' },
        { imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg', seen: false, username: 'Emma' },
        { imageUri: 'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg', seen: true, username: 'Alice' },
        { imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg', seen: false, username: 'Sophia' },
        { imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg', seen: true, username: 'Liam' },
        { imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg', seen: false, username: 'Noah' },
        { imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg', seen: true, username: 'Olivia' },
        { imageUri: 'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg', seen: false, username: 'Ava' },
        { imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg', seen: true, username: 'Mia' },
        { imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg', seen: false, username: 'Lucas' },
        { imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg', seen: true, username: 'Ethan' },
        { imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg', seen: false, username: 'Isabella' },
    ]

export const StateHorizontalList = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <VirtualizedList<UserStateData>    
                data={staticData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item , index}) => (
                    <View style={[
                        index === 0 ? styles.firtsItemMargin : index === staticData.length -1 ? styles.lastItemMargin : styles.centralItemMargin
                    ]} >
                        <UserState imageUri={item.imageUri} seen={item.seen} username={item.username} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

