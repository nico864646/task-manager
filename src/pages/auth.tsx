import { NextPage } from "next";
import { useState } from "react";
import { Container, Content, ErrorContainer } from "../styles/auth";
import {FaGithub} from 'react-icons/fa'
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const Authentication: NextPage = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [pageMode, setPageMode] = useState<'login' | 'register'>('login')

  return (
    <Container>
      <Content>
          <h1>{pageMode === 'login' ? 'Entre com a sua Conta' : 'Cadastre sua Conta'}</h1>
          <AuthInput
            label="E-mail"
            type="email"
            value={email}
            onValueChange={setEmail}
          />

          <AuthInput
            label="Nome"
            type="text"
            value={name}
            hasRender={ pageMode === 'login' ? true : false }
            onValueChange={setName}
          />

          <AuthInput
            label="Senha"
            type="password"
            value={password}
            onValueChange={setPassword}
          />

          <AuthButton styles={'login-btn'}>
            {pageMode === 'login' ? 'Entrar' : 'Cadastrar'}
          </AuthButton>


          <AuthButton 
            styles="git-login-btn" 
            role='button'
            noRender={ pageMode === 'register' ? true : false }
          >
            Entrar com GitHub <FaGithub className="git-login-logo"/>
          </AuthButton>

          {pageMode === 'login' ? 
            <>
              <p onClick={()=>setPageMode('register')}>Cadastrar-se gratuitamente</p>
            </>
            : 
            null
          }
      </Content>
    </Container>

  );
}

export default Authentication;
