import React from "react";

const UsersList = ({ users }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Kullanıcı Listesi</h2>
      {users && users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>İsim</th>
              <th style={styles.th}>E-posta</th>
              <th style={styles.th}>Kayıt Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.date || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.empty}>Henüz kullanıcı eklenmedi.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    marginTop: "20px",
  },
  title: {
    marginBottom: "15px",
    color: "#333",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    background: "#f8f9fa",
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  tr: {
    transition: "background 0.2s ease",
  },
  empty: {
    textAlign: "center",
    color: "#999",
  },
};

export default UsersList;
