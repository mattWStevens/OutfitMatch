// Library Imports
import * as FileSystem from 'expo-file-system';

export const encodeBase64 = async (filePath) => {
    return await FileSystem.readAsStringAsync(filePath, { encoding: 'base64' });
};

export const getColorMatchInfoByIndex = (index, apiResponse) => {
    const result = {
        matchType: '',
        matchingColorCode: '',
        explanationText: ''
    };

    switch (index) {
        case 0:
            result.matchType = 'Neutral Match';
            result.matchingColorCode = apiResponse?.neutralMatch?.color;
            result.explanationText = apiResponse?.neutralMatch?.explanation;
            break;
        case 1:
            result.matchType = 'Conservative Match';
            result.matchingColorCode = apiResponse?.conservativeMatch?.color;
            result.explanationText = apiResponse?.conservativeMatch?.explanation;
            break;
        case 2:
            result.matchType = 'Bold Match';
            result.matchingColorCode = apiResponse?.boldMatch?.color;
            result.explanationText = apiResponse?.boldMatch?.explanation;
            break;
    }

    return result;
};

export const formatJSONString = (inputString) => {
    try {
        // Replace single quotes with double quotes
        let formatted = inputString.replace(/'/g, '"');

        // Add double quotes around unquoted keys
        formatted = formatted.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');

        // Try parsing to ensure it's a valid JSON
        JSON.parse(formatted);

        return formatted;
    } catch (error) {
        return 'Invalid JSON format';
    }
};