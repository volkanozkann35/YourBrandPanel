import React, { useState } from "react";
import { toast } from "react-toastify";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }

    const newUser = {
      name,
      email,
      date: new Date().toLocaleDateString("tr-TR"),
    };

    addUser(newUser);
    toast.success("Kullanıcı başarıyla eklendi!");
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Ekle
      </button>
    </form>
  );
};

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "8px" },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default AddUser;
