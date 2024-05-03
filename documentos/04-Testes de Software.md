# Planos de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
**Objetivo dos testes:** Verificar se o sistema atende aos requisitos funcionais, requisitos não funcionais e respeita as restrições definidas para o projeto.


## Tela Login
*Teste 1:* Botão “Cadastrar”
**Objetivo:** Redirecionar para a tela de cadastro
***Resultado:*** Sucesso, o redirecionamento está acontecendo da forma correta
**Melhorias:** - 
________________________________________
**Teste 2:** Botão “Esqueci Minhas Senha”
**Objetivo:** Redirecionar para a tela de recuperação de senha
**Resultado:** Erro, o botão não está devidamente configurado, a função está sendo a mesma do botão “Entrar”
**Melhorias:** Corrigir a função do botão para que realize devidamente sua função
________________________________________
**Teste 3:** Login
**Objetivo:** Validar os dados do usuário para verificar se está cadastrado e redirecionar para a tela inicial da aplicação caso os dados tenham sido devidamente validado
**Resultado:** Ao inserir um dado incorreto no campo de e-mail, apresenta erro ao fazer login, seja este um e-mail inexistente no banco ou outro dado aleatório.

Ao inserir um e-mail correto e senha incorreta também apresenta o erro na tela para o usuário.

Ao inserir e-mail e senha corretos o usuário está sendo devidamente direcionado a tela home da aplicação.
**Melhorias:** - 
________________________________________
**Teste 4:** Botão visualizar senha
**Objetivo:** Permitir ao usuário visualizar a senha preenchida
**Resultado:** Ao clica no olho no final do campo da senha a mesma pode ser visualizada da forma devida.
**Melhorias:** - 
