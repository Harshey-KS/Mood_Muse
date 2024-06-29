import jwt_decode from 'jwt-decode';

export const decodeToken = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
