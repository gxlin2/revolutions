const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const userInput = "improving sleep quality"
// const userInput = "I want to improve my sleep quality.";

// Function to make the API call and display the response
async function getResponse() {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Suggest 5 steps to ${userInput}`,
            },
        ]
    })


    console.log(response.data.choices[0].message);
};

getResponse()








