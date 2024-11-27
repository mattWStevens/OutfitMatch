// API Imports
import { OPENAI_GET_COLOR_BASE_PROMPT } from './Prompts';

// Utility Imports
import { encodeBase64 } from '../utilities/functions';

const generatePhotoPrompt = (clothingType) => {
    const isPlural = clothingType.endsWith('s');
    const article = isPlural ? ' ' : ' a ';
    const verb = isPlural ? 'are' : 'is';
    const pronoun = isPlural ? 'them' : 'it';

    return `This is a photo of${article}${clothingType}. What color ${verb} the ${clothingType}? What colors would go good with ${pronoun}?`;
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

    const colorInfo = await openai.chat.completions.create({
        messages: getColorPrompt,
        model: 'gpt-4o-mini',
        max_tokens: 500,
        temperature: 0.7
    });

    return colorInfo;
};

export const getColorMatches = async (clothingType, imageFilePath) => {
    try {
        const response = await getColorInfoFromAI(clothingType, imageFilePath);

        if (!response.choices || !response.choices[0]?.message?.content) {
            throw new Error('Invalid API response format');
        }

        // Return the raw content string instead of parsing it
        return response.choices[0].message.content;

    } catch (error) {
        console.error('Error getting color matches:', error);
        throw new Error('Failed to get color matches. Please try again.');
    }
};