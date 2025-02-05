import renderApi from '@api/render-api';
import dotenv from 'dotenv';
dotenv.config();
renderApi.auth(process.env.RENDER_API_KEY);
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));