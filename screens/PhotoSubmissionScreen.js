// Library Imports
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Utility Imports
import { theme } from '../utilities/theme';
import { formatJSONString } from '../utilities/functions';

// Component Imports
import Button from '../components/Button';

// API Imports
import { getColorMatches } from '../api/MatchColorsApi';

export const PhotoSubmissionScreen = ({ route, navigation }) => {
    const [imageURI, setImageURI] = useState({ uri: route.params.imageURI });
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [clothingType, setClothingType] = useState('');
    const [items, setItems] = useState([
        { label: 'Top', value: 'top' },
        { label: 'Shirt', value: 'shirt' },
        { label: 'Jeans', value: 'jeans' },
        { label: 'Shorts', value: 'shorts' },
        { label: 'Socks', value: 'socks' },
        { label: 'Under Garments', value: 'under garments' },
        { label: 'Jacket', value: 'jacket' },
        { label: 'Sweater', value: 'sweater' },
        { label: 'Vest', value: 'vest' },
        { label: 'Dress', value: 'dress' },
        { label: 'Skirt', value: 'skirt' },
        { label: 'Jumpsuit', value: 'jumpsuit' },
        { label: 'Swimwear', value: 'swimwear' },
        { label: 'Hoodie', value: 'hoodie' },
        { label: 'Cardigan', value: 'cardigan' },
        { label: 'Sleepwear', value: 'sleepwear' },
        { label: 'Accessories', value: 'accessories' },
        { label: 'Shoes', value: 'shoes' }
    ]);

    const onSelectClothingType = (type) => setClothingType(type);
    const onSubmitInfo = async () => {
        setLoading(true);
        const color = await getColorMatches(clothingType, imageURI.uri);
        setLoading(false);
        navigation.navigate('Results', {
            apiResponse: formatJSONString(color)
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageURI} style={styles.image} />
            </View>

            <View>
                <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>Clothing Type:</Text>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={onSelectClothingType}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label='Submit'
                        disabled={!clothingType || loading}
                        onPress={onSubmitInfo}
                        labelStyles={{
                            fontWeight: 'bold'
                        }}
                    />
                </View>
                {loading &&
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator style={{ marginTop: 25 }} />
                        <View>
                            <Text
                                style={{
                                    color: theme.colors.primaryText,
                                    fontSize: theme.font.fontSize.caption
                                }}>
                                Submitting Photo...
                            </Text>
                        </View>
                    </View>}
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
        justifyContent: 'space-evenly'
    },
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    buttonContainer: {
        marginLeft: 75,
        marginRight: 75,
        marginTop: 25
    },
    image: {
        width: 320,
        height: 440
    },
    imageContainer: {
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
