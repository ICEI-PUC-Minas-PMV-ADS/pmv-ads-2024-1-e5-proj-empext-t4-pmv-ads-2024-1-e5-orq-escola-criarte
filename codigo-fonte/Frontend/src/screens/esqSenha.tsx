import React, { useState } from "react";
import axios from 'axios';

// Importe a função sendEmail


export default function EsqSenha() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const fetchEvents = async (email: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://localhost:7290/api/users');
      const users = response.data;

      // Busca pelo usuário com o e-mail solicitado
      const user = users.find((user: any) => user.email === email);

      if (user) {
        console.log(user);
        // Chama a função sendEmail se o usuário for encontrado
        
      } else {
        console.log(`Usuário com o e-mail ${email} não encontrado.`);
      }
    } catch (error) {
      console.error(`Erro ao buscar usuários: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    try {
      // Se o usuário existir, você gera uma nova senha aleatória e atualiza no banco de dados.

      // Gera uma nova senha aleatória
      let novaSenha = Math.random().toString(36).slice(-8);

      // Atualize a senha do usuário no banco de dados aqui

      // Busca o usuário e chama a função fetchEvents
      await fetchEvents(email);
    } catch (error) {
      console.error(`Erro ao redefinir a senha: ${error}`);
    }
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Digite seu e-mail"
      />
      <button onClick={handlePasswordReset} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Recuperar Senha'}
      </button>
    </>
  );
}
