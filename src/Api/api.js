const SHUTTER_CLIENT_ID = process.env.REACT_APP_SHUTTER_CLIENT_ID;
const SHUTTER_CLIENT_SECRET = process.env.REACT_APP_SHUTTER_CLIENT_SECRET;
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const basicAuth = () =>
  "Basic ".concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

export const shutterStockVideos = async searchQuery => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=20`;
  const response = await fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters);
  const json = await response.json();
  if (response.status >= 400) {
    throw new Error(json.errors);
  }
  return json.data.map(({ id, assets, description }) => ({
    id,
    mediaUrl: assets.preview_mp4.url,
    description
  }));
};

export const unsplashImages = async searchQuery => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/${UNSPLASH_KEY}&page=1&query=${searchQuery}&per_page=10`
  );
  const json = await response.json();
  if (response.status >= 400) {
    throw new Error(json.errors);
  }
  return json;
};
