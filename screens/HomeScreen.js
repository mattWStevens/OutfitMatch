// Library Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Utility Imports
import { theme } from '../utilities/theme';

// Component Imports
import CircleButton from '../components/CircleButton';

export const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>OutfitMatch</Text>
            <FontAwesome5 name='tshirt' size={200} color={theme.colors.primaryBrand} />
            <View style={styles.buttonContainer}>
                <CircleButton onPress={() => alert('Clicked!')} />
            </View>
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
    },
    buttonContainer: {
        marginBottom: 25
    },
    appTitle: {
        fontSize: theme.font.fontSize.title,
        color: theme.colors.primaryText,
        fontFamily: theme.font.fontFamily.primaryTitle,
        marginTop: 25   // Adjust this to be greater value once add in previous matches and account in top corners.
    }
});
