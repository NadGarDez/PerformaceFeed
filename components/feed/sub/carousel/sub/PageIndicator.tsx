import { flexboxStyles } from "@/styles/flexbox";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        ...flexboxStyles.rowPerfectCenter,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        maxWidth:50,
        maxHeight:50,
        backgroundColor: "#000000A0", // Semi-transparente
    },
    currentPage: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    separator: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFFCC',
    },
    totalPages: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFFCC',
    }
});

interface Props {
    totalPages: number;
    currentPage: number;
}

export const PagerIndicator = ({ totalPages, currentPage }: Props) => {
    const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
    return (
        <View style={styles.container}>
            <Text style={styles.currentPage}>{safeCurrentPage}</Text>
            <Text style={styles.separator}>/</Text>
            <Text style={styles.totalPages}>{totalPages}</Text>
        </View>
    );
};