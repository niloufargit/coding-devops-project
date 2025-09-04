# PLEASE READ THIS : 


-i am aware that it was better to use branches but since i was working on this project alone i mostly used master branch  <br />
-i made my api work after presenatation😊

to use api you have to give it 3 fields and they look like this as a json :
```
{
  "Espece": "Elfe",
  "Classe": "Marge",
  "Metier": "Forgeron"
}
```
and then you get the link 



- if you test it locally on postman use http://localhost:3000/api/generate
-------------
-------------
-------------
no need to use this but if you want to use ansible vault locally by cmd and generate .env  :

after cloning this project if you are member of this group , you have to run this line in order to decrypt the apikey  : <br>
(you already know the password 😉 )
``` 
ansible-vault decrypt group_vars/apikey.yml
```
and then you're gonna run this command in order to create .env :
```
cp group_vars/apikey.yml .env
```
and now you can run the project by running index.js :
```
npm run dev
```

**<span style="color:red;">YOU ARE RESPONSIBLE FOR THIS APIKEY DONT SHARE IT AND DONT OVER USE IT .</span>**


--------------------
### modfied project explaination :

i cloned this chat project but i had to completely change the code to be able to use dall-e in order to generate an image from the given text .   

<br>
<br>
<br>
<br>

-------------
-------------
-------------
-------------
## readme of initial project : 

### OpenAI API Quickstart - Node.js example app

This is an example chat app intended to get you started with your first OpenAI API project. It uses the [Chat Completions API](https://platform.openai.com/docs/api-reference/chat) to create a simple general purpose chat app with streaming.

### Basic request

To send your first API request with the [OpenAI Node SDK](https://github.com/openai/openai-node), make sure you have the right [dependencies installed](https://platform.openai.com/docs/quickstart?context=node) and then run the following code:

```python
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
```

This quickstart app builds on top of the example code above, with streaming and a UI to visualize messages.

### Setup

1. If you don’t have Node.js installed, install it from [nodejs.org](https://nodejs.org/en/) (Node.js version >= 16.0.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
