export const getColorMatches = async () => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4o-mini",
    });

    console.log(completion.choices[0]);

    // TODO: REPLACE THIS LOGIC, JUST PLACEHOLDER FOR NOW.
};