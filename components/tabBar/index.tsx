import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width,
        height: 65,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        justifyContent: 'space-around',
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 5,
    },
    tabItem: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
});

const tabs = [
    { key: 'home', icon: 'home-outline', activeIcon: 'home' },
    { key: 'search', icon: 'search-outline', activeIcon: 'search' },
    { key: 'add', icon: 'add-circle-outline', activeIcon: 'add-circle' },
    { key: 'notifications', icon: 'heart-outline', activeIcon: 'heart' },
    { key: 'profile', icon: 'person-outline', activeIcon: 'person' },
];


export const TabBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const scaleAnimRefs = useRef(
        tabs.reduce((acc, tab) => {
            acc[tab.key] = new Animated.Value(1);
            return acc;
        }, {} as Record<string, Animated.Value>)
    );

    const handlePress = (key: string) => {
        const scaleAnim = scaleAnimRefs.current[key];
        
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.25, 
                duration: 120,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start();

        setActiveTab(key);
    };

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const isFocused = activeTab === tab.key;
                const iconName = isFocused ? tab.activeIcon : tab.icon;
                const iconColor = isFocused ? '#A0522D' : '#9ca3af';

                return (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => handlePress(tab.key)}
                        activeOpacity={0.7}
                        style={styles.tabItem}
                    >
                        <Animated.View
                            style={[
                                styles.iconContainer,
                                { transform: [{ scale: scaleAnimRefs.current[tab.key] }] },
                            ]}
                        >
                            <Ionicons
                                name={iconName as any}
                                size={28}
                                color={iconColor}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};


