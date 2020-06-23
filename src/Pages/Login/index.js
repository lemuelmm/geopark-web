import React from 'react';

import { Link } from 'react-router-dom';

import '../Login/styles.css';
import logo from "../../Assets/logo.svg";

export default function Login() {
  return (
      <div className="loginBox">
        <div className="content">
          
        <div className="presentation">
            <img src={logo} alt="Logo Geopark" />
            <h2>Seja bem vindo ao</h2>
            <h2 id="textSpotlight">Geopark Araripe</h2>
          </div>

          <form>
            <div className="field">  
              <input type="text" name="username" name="username" placeholder="Nome de usuário" ></input>
              <label for="username">Nome</label>
            </div>

            <div className="field">
              <input type="password" name="password" name="password" placeholder="Sua senha" ></input>
              <label for="password">Senha</label>
            </div>

            <button>Entrar</button>
          </form>

          <Link className="recover" to="/recover">
            <p>Esqueceu sua senha? Clique aqui</p>
          </Link>

         </div>
      </div>
  );
}