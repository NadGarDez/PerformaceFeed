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

const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const MAX_LINES = 3;

export const DescriptionText = (): JSX.Element => {
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
                {sampleText}
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