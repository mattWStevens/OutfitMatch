// Library Imports
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    View,
    Text
} from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Utility Imports
import { theme } from '../utilities/theme';

export const PhotoSubmissionScreen = ({ route, navigation }) => {
    const [imageURI, setImageURI] = useState({ uri: route.params.imageURI });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Shirt', value: 'shirt' },
        { label: 'Pants', value: 'pants' },
        { label: 'Socks', value: 'socks' },
        { label: 'Under Garments', value: 'under_garments' },
        { label: 'Jacket', value: 'jackeet' },
        { label: 'Sweater', value: 'sweater' },
        { label: 'Vest', value: 'vest' },
        { label: 'Dress', value: 'dress' },
        { label: 'Skirt', value: 'skirt' },
        { label: 'Blouse', value: 'blouse' },
    ]);

    // TODO: ADD SUBMIT BUTTON, FINALIZE CLOTHING TYPE LIST, AND CREATE LOGIC TO CAPTURE CHOICE.

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageURI} style={styles.image} />
            </View>

            <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Clothing Type:</Text>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
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
        flexDirection: 'column',
        gap: 75
    },
    image: {
        width: 320,
        height: 440
    },
    imageContainer: {
        marginTop: 50,
        borderWidth: 5,
        borderColor: theme.colors.lightBrand
    },
    dropdownContainer: {
        padding: 25
    },
    dropdownLabel: {
        fontSize: 25,
        marginBottom: 15,
        color: theme.colors.primaryText
    }
});
