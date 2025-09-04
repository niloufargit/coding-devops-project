import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const sebastien_apikey = process.env.OPENAI_API_KEY;

console.log('API Key:', sebastien_apikey);

const openai = new OpenAI({apiKey: sebastien_apikey});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed', allowedMethods: ['POST'] });
      return;
    }

    const { Espece, Classe, Metier } = req.body;

    if (!Espece || !Classe || !Metier) {
      res.status(400).json({ error: 'Missing JSON input fields' });
      return;
    }

    const jsonData = ` un ${Espece} qui a une classe de ${Classe} et qui travaille en tant que ${Metier} `;

    const response = await openai.images.generate({
      model: 'dall-e-2',
      prompt: jsonData,
      n: 1,
      size: '512x512'
    });

    const imageUrl = response.data[0].url;

    res.status(200).json({ success: true, imageUrl }); // Return the imageUrl
  } catch (error) {
    console.error('Error generating or sending image:', error);
    res.status(500).json({ success: false, error: 'Image generation or saving failed' });
  }
}
