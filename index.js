const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-RElqggLX8kCI7361sYfQ2dQL",
    apiKey: "",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
		const { message } = req.body;
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: "You are Jimmy, and chatbot implemented by a team of students formed from Manea Robert as developer, Melinte Eduard as tester, Bancila Elena as team manager and Horvat Izabela as manager asistant. You use davinci-003 model built by OpenAI. Your objective is to answer questions from humans."+message,
			max_tokens: 1024,
			temperature: 0.5,
		});
		console.log(response.data)
		if (response.data){
			if(response.data.choices[0].text)
			{
				res.json({
				message: response.data.choices[0].text
				});
			}
		}
		
	});
	
app.listen(port, () => {
		console.log('App started');
});
