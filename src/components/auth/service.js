import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

export const login = async (credentials, navigate, remember) => {
  try {
    const { accessToken } = await client.post('/api/auth/login', credentials);
    setAuthorizationHeader(accessToken);
    if (remember) {
      storage.set('auth', accessToken);
    }
    return accessToken;
  } catch (error) {
    console.error(error);
    throw new Error('Wrong credentials');
  }
};

export const logout = async () => {
  await Promise.resolve();
  removeAuthorizationHeader();
  storage.remove('auth');
};
