// Library Imports
import { StyleSheet, View, Pressable, Text } from 'react-native';

// Utility Imports
import { theme } from '../utilities/theme';

export default function Button({
    label,
    buttonStyles,
    labelStyles,
    onPress
}) {
    return (
        <View style={[styles.buttonContainer, { ...buttonStyles }]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text
                    style={[styles.buttonLabel, { ...labelStyles }]}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.colors.primaryBrand,
        padding: 16,
        borderRadius: 8
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: theme.colors.primaryText,
        fontSize: 16
    }
});