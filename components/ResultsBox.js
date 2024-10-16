// Library Imports
import { StyleSheet, View, Text } from 'react-native';

// Utility Imports
import { theme } from '../utilities/theme';

export default function ResultsBox({
    matchType,
    explanationText,
    clothingColorCode,
    matchingColorCode
}) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {matchType}
                </Text>
            </View>

            <View style={styles.colorSideBySide}>
                <View style={styles.colorBoxContainer}>
                    <View style={[styles.colorBox, { backgroundColor: clothingColorCode }]} />
                    <View><Text>Clothing Color</Text></View>
                </View>

                <View style={styles.colorBoxContainer}>
                    <View style={[styles.colorBox, { backgroundColor: matchingColorCode }]} />
                    <View><Text>Matching Color</Text></View>
                </View>
            </View>

            <View>
                <Text style={styles.explanationText}>
                    {explanationText}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        dislay: 'flex',
        flexDirection: 'column',
        padding: 16,
        gap: 8,
        backgroundColor: theme.colors.lightBrand,
        borderWidth: theme.borders.defaultBorderWidth,
        borderStyle: theme.borders.defaultBorderStyle,
        borderColor: theme.borders.defaultBorderColor,
        margin: 15
    },
    title: {
        fontSize: theme.font.fontSize.subtitle
    },
    explanationText: {

    },
    colorSideBySide: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 16
    },
    colorBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    colorBox: {
        padding: 4,
        borderWidth: theme.borders.defaultBorderWidth,
        borderStyle: theme.borders.defaultBorderStyle,
        borderColor: theme.borders.defaultBorderColor,
        marginBottom: 4,
        width: '50%',
        paddingBottom: '50%'
    }
});