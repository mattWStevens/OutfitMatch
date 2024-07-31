// Library Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';

// Utility Imports
import { theme } from '../utilities/theme';

// Component Imports
import CircleButton from '../components/CircleButton';

export const HomeScreen = ({ navigation }) => {
    const takePicture = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status === 'granted') {
            try {
                const result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 1,
                    aspect: [4, 3],
                });
                if (!result.cancelled) {
                    console.log(result);
                }
            } catch (error) {
                console.log("Error occurred while launching the camera: ", error);
            }
        } else {
            alert('failed');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>OutfitMatch</Text>
            <FontAwesome5 name='tshirt' size={200} color={theme.colors.primaryBrand} />
            <View style={styles.buttonContainer}>
                <CircleButton onPress={takePicture} />
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
