# Planos de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
**Objetivo dos testes:** Verificar se o sistema atende aos requisitos funcionais, requisitos não funcionais e respeita as restrições definidas para o projeto.



# Tela Login
- [**Teste 1:** Botão “Cadastrar”](https://drive.google.com/file/d/1-RsyXpdorAxcUcbTMkNN_xadUiYwDKwm/view?usp=sharing)
- **Objetivo:** Redirecionar para a tela de cadastro
- **Resultado:** Sucesso, o redirecionamento está acontecendo da forma correta
- **Melhorias:** -

_______________________________________
- [**Teste 2:** Botão “Esqueci Minhas Senha”](https://drive.google.com/file/d/1uQ9vvGRXtEHB2W5-YT9k7QTXvrTV9--l/view?usp=sharing)
- **Objetivo:** Redirecionar para a tela de recuperação de senha
- **Resultado:** Erro, o botão não está devidamente configurado, a função está sendo a mesma do botão “Entrar”
- **Melhorias:** Corrigir a função do botão para que realize devidamente sua função
________________________________________
- [**Teste 3:** Login](https://drive.google.com/file/d/1jLeW6Rc4Pu0Yx7sR9zE34qWFiUSgkdE6/view?usp=sharing)
- **Objetivo:** Validar os dados do usuário para verificar se está cadastrado e redirecionar para a tela inicial da aplicação caso os dados tenham sido devidamente validado
- **Resultado:** Ao inserir um dado incorreto no campo de e-mail, apresenta erro ao fazer login, seja este um e-mail inexistente no banco ou outro dado aleatório.
Ao inserir um e-mail correto e senha incorreta também apresenta o erro na tela para o usuário.
Ao inserir e-mail e senha corretos o usuário está sendo devidamente direcionado a tela home da aplicação.
- **Melhorias:** - 
________________________________________
- [**Teste 4:** Botão visualizar senha](https://drive.google.com/file/d/1RPwr9nhNw1Pi6YUuRVN3TPze-N8VJWFj/view?usp=sharing)
- **Objetivo:** Permitir ao usuário visualizar a senha preenchida
- **Resultado:** Ao clica no olho no final do campo da senha a mesma pode ser visualizada da forma devida.
- **Melhorias:** - 



# Tela Cadastrar
- [**Teste 5:** Preenchimento do campo de e-mail](https://drive.google.com/file/d/1hbd2sCXfLK4p-ajFbmejTGyQ5ORwZYpV/view?usp=sharing)
- **Objetivo:** Verificar se o campo e-mail está sendo devidamente validados segundo as regras estabelecidas
- **Resultado:** A validação do campo e-mail não está sendo feito da forma devida, pois o cadastro pôde ser concluído mesmo digitando um e-mail inválido;
- **Melhorias:** Fazer a validação corretamente do input de e-mail e trazer retorno visual ao usuário sobre o erro cadastro e acrescentar um botão para retornar a tela de login. 
________________________________________
- [**Teste 6:** Preenchimento do campo de e-mail](https://drive.google.com/file/d/19hj5zCK53ROrMg32coF1AnHOBuy-5D0a/view?usp=sharing)
- **Objetivo:** Verificar se o campo e-mail está sendo devidamente validados segundo as regras estabelecidas
- **Resultado:** A validação de duplicidade de e-mail está sendo feito da forma devida, pois o cadastro não pôde ser concluído inserindo um e-mail que já está cadastrado no sistema;
- **Melhorias:** Trazer retorno visual ao usuário sobre o erro, de que este email já está cadastrado no sistema.
________________________________________
- [**Teste 7:** Preenchimento do campo da senha](https://drive.google.com/file/d/14mjOEbMLtVHn4GV23SSV_4H285Vmze8y/view?usp=sharing)
- **Objetivo:** Verificar se o campo senha está sendo devidamente validados segundo as regras estabelecidas
- **Resultado:** A validação da senha está sendo feito da forma devida, pois o cadastro não pôde ser concluído caso o usuário insira uma senha que não cumpra com TODOS os requisitos;
- **Melhorias:** -



# Tela Home
- [**Teste 8:** Navegação](https://drive.google.com/file/d/1fqPS0CySOOUk_Iu2GIjxPTlGGg0EB_RJ/view?usp=sharing)
- **Objetivo:** Verificar se os botões na parte inferior e superior da tela cumprem suas devidas funções
- **Resultado:** Na parte superior os botões cumprem suas devidas funções.
- **Melhorias:** Finalizar as demais telas para execução dos testes e criar o feed para que os administradores possam criar publicações.



# Tela Contato
- [**Teste 9:** Funcionalidade dos cards de informação](https://drive.google.com/file/d/1GMf1EqUYoa5tQsUJTEFZbcp0O8Z06Y-P/view?usp=sharing)
- **Objetivo:** Cada card com a informação de contato, deverá redirecionar o usuário para a tela correspondente a informação apresentada no card, exceto o card de “horário de atendimento”
- **Resultado:** -
- **Melhorias:** -



# Tela Meu Perfil
- [**Teste 10:** Alteração do e-mail do usuário](https://drive.google.com/file/d/1HXOfIuZg9MnX-N-lxWECEZQlN-XupAae/view?usp=sharing)
- **Objetivo:** O usuário pode trocar o e-mail de sua conta, desde que não exista esse e-mail já cadastrado no banco de dados.
- **Resultado:** A função de alterar a e-mail funcionam devidamente, contudo não existe retorno visual para o usuário, as informações de erro e sucesso aparecem apenas no console.
- **Melhorias:** Trazer retorno visual para o cliente do erro ou sucesso da operação.
________________________________________
- **Teste 11:** Alteração da senha do usuário
- **Objetivo:** O usuário pode trocar a senha de sua conta, desde que cumpra os requisitos de senha do sistema.
- **Resultado:** A função de alterar a senha funcionam devidamente, contudo não existe retorno visual para o usuário, as informações de erro e sucesso aparecem apenas no console.
- **Melhorias:** Trazer retorno visual para o cliente do erro ou sucesso da operação.

## `Sugestão de melhoria:`
- ` Permitir o usuário alterar somente o e-mail ou somente a senha, no momento o usuário é obrigado a alterar o e-mail pois não consegue alterar a senha sem mexer no e-mail.`
- ` E a alteração do e-mail exige que a senha seja inserida ou alterada para confirmar a alteração.`
- ` O usuário deve poder alterar o nome dele também no sistema.`
- ` Para alteração do e-mail o usuário deve preencher a senha atual para confirmar a alteração.`
- ` Para alterar a senha o usuário deve inserir a senha atual e inserir a nova senha duas vezes, e a nova senha deverá passar pela validação de requisitos.`
- ` Trocar botão da tela de perfil “Sair” por “Voltar”.`



# Tela Eventos
- [**Teste 12:** Criação de Evento](https://drive.google.com/file/d/1HXNDlFK55qOIvOlizJcXk-tAYUKxisfn/view?usp=sharing)
- **Objetivo:** O usuário deve criar um evento e visualiza-lo na tela de eventos
- **Resultado:** O usuário consegue fazer a criação do evento adequadamente e é possível visualiza-lo na tela de eventos
- **Melhorias:** Trazer retorno visual para o cliente do erro ou sucesso da operação.
________________________________________
- [**Teste 13:** Deletar Evento](https://drive.google.com/file/d/1HV4bJTpMSVdPmjUS65Agz9z3oMCF8y8U/view?usp=sharing)
- **Objetivo:** O usuário deve poder deletar um evento criado 
- **Resultado:** O usuário consegue fazer a exclusão do evento adequadamente e em seguida o evento desaparece da tela de eventos também
- **Melhorias:** Abrir um pop-up para confirmação da exclusão e trazer retorno visual para o cliente do erro ou sucesso da operação.

## `Sugestão de melhorias:`
- ` O horário apresenta hora, minutos e segundos, mas basta as horas e os minutos.`
- ` O endereço do evento só pede rua e número, é interessante que se consiga buscar o endereço automaticamente utilizando o CEP, e que acrescente o bairro também.`
- ` O conteúdo do campo descrição está centralizado, ele deve ficar ajustado a esquerda.`
- ` Ao clicar no botão “mais informações” todos os eventos estão mostrando as suas descrições, seria bom que cada card de evento funcionasse de maneira independente.`
- ` Ao clicar no endereço do evento ser redirecionado automaticamente para o Google Maps para as coordenadas do endereço. A mesma funcionalidade poderá ser utilizada no card de Contatos com a instituição, pois eventualmente o endereço poderá ser alterado.`

