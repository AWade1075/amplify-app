import axios from 'axios';

const CLIENT_ID = 'f24737a7d7594d35b7c12a399ff1f086';
const CLIENT_SECRET = 'a32ab3bd90144a86a5031b298051320b';
const REDIRECT_URL = 'http://localhost:3001';

const login = async () => {
  const scope = 'user-read-private user-read-email';
  const { data, status } = await axios({
    method: 'GET',
    url: 'https://accounts.spotify.com/authorize?',
    params: {
      scope,
      redirect_uri: REDIRECT_URL,
      client_id: CLIENT_ID,
    },
  });
};

const authorize = async () => {
  const { data, status } = axios;
};
