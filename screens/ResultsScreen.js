// Library Imports
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { useState } from 'react';

// Utility Imports
import { theme } from '../utilities/theme';
import { getColorMatchInfoByIndex } from '../utilities/functions';

// Component Imports
import ResultsBox from '../components/ResultsBox';

export const ResultsScreen = ({ route }) => {
    const apiResponse = JSON.parse(route.params?.apiResponse || '');
    const [primaryColor, setPrimaryColor] = useState(apiResponse?.primaryColor);
    const resultsIterator = [1, 2, 3];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {resultsIterator.map((_, index) => {
                    const colorInfo = getColorMatchInfoByIndex(index, apiResponse);

                    return (
                        <ResultsBox
                            key={colorInfo.matchType}
                            matchType={colorInfo.matchType}
                            explanationText={colorInfo.explanationText}
                            clothingColorCode={primaryColor}
                            matchingColorCode={colorInfo.matchingColorCode}
                        />
                    )
                })}
            </ScrollView>
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
