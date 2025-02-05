import axios from 'axios';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.get('/', async (req, res) => {
  try {
    const apiKey = process.env.RENDER_API_KEY;
    if (!apiKey) {
      throw new Error('RENDER_API_KEY is missing');
    }

    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Render API:', error.response?.status || error.message);
    res.status(error.response?.status || 500).json({
      message: 'Error fetching data',
      error: error.message,
      details: error.response?.data,
    });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
