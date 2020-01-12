//const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';
const UNSPLASH_KEY ='?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';


const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;
  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
  .then(response => {
    return response.json();
  })
  .then(json => {
      return json.data.map(({ id, assets, description }) => ({
        id,
        mediaUrl: assets.preview_mp4.url,
        description
      }));
  });
};

export const unsplashImages = (searchQuery) => {
  return fetch(`https://api.unsplash.com/search/photos/${UNSPLASH_KEY}&page=1&query=${searchQuery}`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json;
  })
  }

/* export const flickrImages = (searchQuery) => {
  console.log("flickr", searchQuery);
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
}; */
