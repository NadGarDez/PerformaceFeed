import { StyleSheet } from "react-native";

export const flexboxStyles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowPerfectCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowSpaceBetweenCenter: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowSpaceAroundCenter: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rowFlexStartCenter: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowFlexEndCenter: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    columnPerfectCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnFlexStartCenter: {
        display: 'flex',
        flexDirection: 'column',   
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    columnFlexEndCenter: {
        display: 'flex',
        flexDirection: 'column',   
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
});

