const API_URL = process.env.REACT_APP_API_URL + '/users';

// ➕ Kullanıcı ekleme
export const addUser = async (user) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};

// 📄 Kullanıcı listeleme
export const getUsers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// ✏️ Kullanıcı güncelleme
export const updateUser = async (id, user) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};

// 🗑 Kullanıcı silme
export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return res.json();
};
