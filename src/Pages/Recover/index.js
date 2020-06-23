import React from 'react';

import { Link } from 'react-router-dom';

import '../Recover/styles.css';

export default function Recover() {
  return (
      <div className="loginBox">
        <div className="content">
          
        <div className="tittle">
            <h2 >Esqueceu sua senha?</h2>
            <p>Enviaremos um link de recuperação de senha para seu email</p>
        </div>

          <form className="form">
            <div className="email">  
              <input type="email" name="email" name="email" placeholder="Email" ></input>
              <label for="email">Email</label>
            </div>

            <button>Esqueci minha senha</button>

          </form>

          <Link className="back-login" to="/">
          <p> Tem uma senha? Fazer login</p> 
          </Link>

          </div>
      </div>
  );
}
