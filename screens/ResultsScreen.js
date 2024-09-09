// Library Imports
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';

// Utility Imports
import { theme } from '../utilities/theme';

export const ResultsScreen = ({ route, navigation }) => {
    console.log("route", route)

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primaryBackground,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    }
});
