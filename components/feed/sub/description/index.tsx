import React, { JSX, useState } from "react";
import {
    LayoutAnimation,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    readMoreContainer: {
        marginTop: 8,
    },
    readMoreText: {
        fontSize: 14,
        color: '#1DA1F2',
        fontWeight: '600',
    }
});

const MAX_LINES = 3;

interface props {
    text: string
}

export const DescriptionText = (props:props): JSX.Element => {

    const {text} = props;
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const handleToggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setCollapsed(!collapsed);
    };

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}
                numberOfLines={collapsed ? MAX_LINES : undefined}
            >
                {text}
            </Text>
            
            <TouchableOpacity 
                onPress={handleToggle}
                style={styles.readMoreContainer}
                activeOpacity={0.7}
            >
                <Text style={styles.readMoreText}>
                    {collapsed ? 'Read more' : 'Show less'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}