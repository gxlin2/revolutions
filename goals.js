

if (localStorage.getItem("goal1prog") == null) {
    localStorage.setItem("goal1prog", 0);
}
if (localStorage.getItem("goal2prog") == null) {
    localStorage.setItem("goal2prog", 0);
}
if (localStorage.getItem("goal3prog") == null) {
    localStorage.setItem("goal3prog", 0);
}

var prog1 = localStorage.getItem("goal1prog");
var prog2 = localStorage.getItem("goal2prog");
var prog2 = localStorage.getItem("goal3prog");

var temp = 0;

document.getElementById("percent1").textContent = temp + "%";
document.getElementById("percent2").textContent = prog2 + "%";
document.getElementById("percent3").textContent = prog1 + "%";


// const { OpenAIApi } = require('openai');

// const apiKey = "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";
// const openai = OpenAIApi({ apiKey });

// const userInput = "improving sleep quality";

// // Function to make the API call and display the response
// async function getResponse() {
//     const response = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [{
//             role: 'user',
//             content: userInput, // Use the actual user input here
//         }]
//     });

//     console.log(response.data.choices[0].message.content);
// }

// getResponse();



// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: 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,
// });

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// });


// async function goals() {

// }
// start() 



function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }




const getResponseButton = document.getElementById('getResponseButton');
const userInput = document.getElementById('my-goal');
const responseContainer = document.getElementById('responseContainer');


const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

const getResponses=async()=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `3 steps to acheiving $[userInput]`}],
    max_tokens:100
  });
  const suggestions = chatCompletion.choices[0].message.content
}

function getResponses() {
    responseContainer.textContent = suggestions;
    getResponseButton.addEventListener('click', "HIII");
    document.getElementById('demo').innerHTML = "HI";
}


// const {Configuration, OpenAIApi} = require('openai')

// const configuration = new Configuration({
//     apiKey: "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",
// })

// const openai = new OpenAIApi(configuration)

// const userInput = "improving sleep quality"
// // const userInput = "I want to improve my sleep quality.";

// // Function to make the API call and display the response
// async function getResponse() {
//         const response = await openai.createChatCompletion({
//             model: 'gpt-3.5-turbo',
//             prompt: "Give next steps to goals",
//             temperature: 0,
//             max_tokens: 1000
//     })
//     console.log(response.data.choices[0].message)
// } 
// getResponse()


    
