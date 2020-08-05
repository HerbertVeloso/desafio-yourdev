import React from 'react'

// Importando os dados de configuração
import { authEndpoint, clientId, redirectUri, scopes } from "../../utils/config"

import logo from "../../images/logo.png"
import * as S from "./style"

const Login = () => (
  <S.Background>
    <S.LoginWrapper>
      <S.Logo src={logo} alt="Spotify Logo" />
      <S.Title>Desafio your/dev</S.Title>
      {/* Link para a página de login do Spotify */}
      <S.Button
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Sign in
      </S.Button>
      <S.Copyright>Desenvolvido por Herbert Veloso.</S.Copyright>
    </S.LoginWrapper>
  </S.Background>
)


export default Login
