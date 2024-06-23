import "./Login.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleFormEdit(e, "email")}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleFormEdit(e, "email")}
        />
        <button type="submit">Logar</button>
      </form>
      <p>Novo por aqui?</p>
      <Link to="/register">Registrar-se</Link>
    </div>
  );
};

export default Login;
