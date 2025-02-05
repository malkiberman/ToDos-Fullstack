import renderApi from '@api/render-api';

renderApi.auth('rnd_U9mdfqtBpDzk8g59xsSH0sSktwOZ');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));