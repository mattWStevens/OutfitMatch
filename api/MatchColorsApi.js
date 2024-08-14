// API Imports
import { OPENAI_GET_COLOR_BASE_PROMPT } from './Prompts';

// Utility Imports
import { encodeBase64 } from '../utilities/functions';

const getPrimaryColorFromImage = async (clothingType, imageFilePath) => {
    const getColorPrompt = [...OPENAI_GET_COLOR_BASE_PROMPT];

    const base64Image = await encodeBase64(imageFilePath);

    getColorPrompt.push({
        'role': 'user',
        'content': [
            { 'type': 'text', 'text': `This is a photo of ${clothingType}. What color is the ${clothingType}?` },
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
    const primaryColorResponse = await getPrimaryColorFromImage(clothingType, imageFilePath);
    const primaryColorHexCode = primaryColorResponse.choices[0].message.content;
};