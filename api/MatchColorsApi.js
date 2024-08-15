// API Imports
import { OPENAI_GET_COLOR_BASE_PROMPT } from './Prompts';

// Utility Imports
import { encodeBase64 } from '../utilities/functions';

const generatePhotoPrompt = (clothingType) => {
    const isPlural = clothingType.endsWith('s');
    return `This is a photo of${isPlural ? ' ' : ' a '}${clothingType}. What color ${isPlural ? 'are' : 'is'} the ${clothingType}? What colors would go good with ${isPlural ? 'them' : 'it'}?`;
};

const getColorInfoFromAI = async (clothingType, imageFilePath) => {
    const getColorPrompt = [...OPENAI_GET_COLOR_BASE_PROMPT];

    const base64Image = await encodeBase64(imageFilePath);

    getColorPrompt.push({
        'role': 'user',
        'content': [
            { 'type': 'text', 'text': generatePhotoPrompt(clothingType) },
            {
                'type': 'image_url',
                'image_url': {
                    'url': `data:image/jpeg;base64,${base64Image}`,
                },
            }
        ]
    });

    const hexColorCode = await openai.chat.completions.create({
        messages: getColorPrompt,
        model: 'gpt-4o-mini',
    });

    return hexColorCode;
};

export const getColorMatches = async (clothingType, imageFilePath) => {
    const colorInfoResponse = await getColorInfoFromAI(clothingType, imageFilePath);
    const colorInfo = colorInfoResponse.choices[0].message.content;

    return colorInfo;
};