import "./Register.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormEdit = (e, name) => {
    setFormData({
      ...setFormData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('',{
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div id="login">
      <h1>Cadastrar-se</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Nome"
          required
          value={formData.userName}
          onChange={(e) => {
            handleFormEdit(e, "userName");
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => {
            handleFormEdit(e, "email");
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          value={formData.password}
          onChange={(e) => {
            handleFormEdit(e, "password");
          }}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          required
          value={formData.confirmPassword}
          onChange={(e) => {
            handleFormEdit(e, "confirmPassword");
          }}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>Já possui uma conta?</p>
      <Link to="/login">Logar</Link>
    </div>
  );
};

export default Register;
