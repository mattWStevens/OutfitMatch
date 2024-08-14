// API Imports
import { OPENAI_GET_COLOR_BASE_PROMPT } from './Prompts';

const getPrimaryColorFromImage = async (clothingType, image) => {
    const getColorPrompt = [...OPENAI_GET_COLOR_BASE_PROMPT];

    // NOTE IMAGE WILL NEED TO BE BASE64 ENCODED
    // USE readFile(FILE_PATH, 'base64') which returns a promise.
    // https://github.com/joltup/rn-fetch-blob/wiki/File-System-Access-API#readfilepath-encodingpromise

    getColorPrompt.push({
        'role': 'user',
        'content': [
            { 'type': 'text', 'text': `This is a photo of ${clothingType}. What color is the ${clothingType}?` },
            {
                'type': 'image_url',
                'image_url': {
                    'url': `data:image/jpeg;base64,${image}`,   // PUT BASE64 ENCODED HERE.
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

export const getColorMatches = async (clothingType, image) => {
    const primaryColor = await getPrimaryColorFromImage(clothingType, image);
    console.log('primary color', primaryColor)
};