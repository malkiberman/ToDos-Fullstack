import renderApi from '@api/render-api';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// אוטנטיקציה עם Render API
renderApi.auth(process.env.RENDER_API_KEY); // הכנס את ה-API Key שלך
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const app = express();
const port = process.env.PORT || 3000; // Render נותן לך את הפורט דרך משתנה סביבה

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
