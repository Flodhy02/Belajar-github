import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan ke localStorage (simulasi database)
    localStorage.setItem("user", JSON.stringify(form));
    alert("Register berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username"
          value={form.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p onClick={() => navigate("/login")} className="link">
        Sudah punya akun? Login
      </p>
    </div>
  );
}

export default Register;
