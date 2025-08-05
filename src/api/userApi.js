import axios from 'axios';

// 🔥 PORT'u doğrudan yazıyoruz:
const API_URL = 'http://localhost:5000/api/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (userData) => axios.post(API_URL, userData);
