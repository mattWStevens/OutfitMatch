// Library Imports
import * as FileSystem from 'expo-file-system';

export const encodeBase64 = async (filePath) => {
    return await FileSystem.readAsStringAsync(filePath, { encoding: 'base64' });
};