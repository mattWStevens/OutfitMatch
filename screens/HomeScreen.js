import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../components/CircleButton';

export const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <CircleButton onPress={() => alert('Clicked!')} />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
