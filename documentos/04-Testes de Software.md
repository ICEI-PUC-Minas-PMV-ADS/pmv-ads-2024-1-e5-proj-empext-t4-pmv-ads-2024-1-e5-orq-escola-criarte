# Planos de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
**Objetivo dos testes:** Verificar se o sistema atende aos requisitos funcionais, requisitos não funcionais e respeita as restrições definidas para o projeto.

## Testes de Requisitos Funcionais:

#### RF-001:
**Objetivo** A plataforma deve permitir que o usuario faça login em uma conta, a qual será utilizada para visualizar e inscrever-se nos cursos e eventos disponíveis.

**Passos:**
1.	Acessar a aplicação
2.	Clicar em ‘login’
3.	Inserir login e senha
4.	Clicar em ‘entrar’

**Critérios de Êxito:**
será redirecionado para o feed 

#### RF-002:
**Objetivo** Cadastro de Novos Usuários Assegurar que o processo de cadastro de novos usuários na aplicação seja eficiente e seguro.
**Passos:**
1.	Acessar a aplicação
2.	Selecionar a opção ‘Cadastrar-se’ 
3.	Preencher o formulário de cadastro
4.	Clicar no botão ‘Cadastrar

**Critérios de Êxito:**
Deverá receber a mensagem: ‘Usuário cadastrado com sucesso’

#### RF-003:
**Objetivo** Teste de Usabilidade: Verificar se a interface do usuário é intuitiva, fácil de navegar e acessível para todos os usuários.
**Passos:**
1.	Acessar a aplicação
2.	Navegar pelo menu do aplicativo sem dificuldades 
3.	clareza das informaçoes sobre eventos e cursos
4.	Facilidade no proceso inscrição

**Critérios de Êxito:**
A aplicação deve se mostrar inturitiva

#### RF-004:
**Objetivo** Feed de Eventos: Exibir em ordem cronológica todos os eventos tal como: cursos, palestras entre outros comunicados.
**Passos:**
1.	Acessar a aplicação
2.	Navegar até o feed de notícias 
3.	visualizar os eventos
4.	increver-se nós eventos

**Critérios de Êxito:**
A aplicação deve exibir os eventos e cadastrar o interesse do usuario corretamente.

### Requisitos não Funcionais


#### RNF-001:
**Objetivo** Performance: Verificar se a aplicação apresenta bom desempenho, incluindo tempos de resposta rápidos e baixo consumo de recursos.

**Passos:**
1.	Utilizar ferramentas de profiling para medir o consumo de CPU
2.	Realizar testes de carga para avaliar o desempenho da aplicação sob diferentes níveis de utilização.

**Critérios de Êxito:**
A aplicação deve manter tempos de resposta aceitáveis e consumir recursos de forma eficiente, mesmo sob carga intensa.

#### RNF-002:
**Objetivo** Disponibilidade: Garantir que a aplicação esteja disponível e acessível para os usuários na maior parte do tempo.
**Passos:**
1.	Utilizar ferramentas de monitoramento para verificar a disponibilidade da aplicação ao longo do tempo.
2.	Realizar testes de recuperação de falhas para verificar se a aplicação é capaz de se recuperar de falhas de forma rápida e eficiente.

**Critérios de Êxito:**
A aplicação deve estar disponível para os usuários pelo menos 99,9% do tempo

#### RNF-003:
**Objetivo** Segurança da Informação: Garantir que a aplicação proteja os dados sensíveis dos usuários contra acessos não autorizados.
**Passos:**
1.	Realizar testes de penetração para identificar vulnerabilidades de segurança na aplicação.
2.	Verificar se a aplicação utiliza práticas recomendadas de segurança, como criptografia de dados e autenticação de usuários.

**Critérios de Êxito:**
A aplicação deve proteger os dados sensíveis dos usuários contra acessos não autorizados.

#### RNF-004:
**Objetivo** Garantir que a aplicação tenha uma interface intuitiva e fácil de usar, com navegação clara e elementos de design intuitivos, facilitando a busca e utilização pelos clientes.
**Passos:**
1.	Utilizar conceitos de User Experience (UX) e User Interface (UI) no desenvolvimento da interface
2.	Realizar testes de usabilidade com usuários reais para avaliar a facilidade de uso da aplicação.

**Critérios de Êxito:**
 A aplicação deve receber avaliações positivas dos usuários quanto à facilidade de uso e clareza da interface.

 ## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

#### 01
 **Objetivo** O desenvolvimento da aplicação deve ser concluído dentro do prazo estabelecido.
 
**Passos:**
1.	Cumprir o cronograma de desenvolvimento estabelecido, seguindo as datas das Sprints.

**Critérios de Êxito:**
Conclusão do desenvolvimento dentro do prazo acordado.

#### 02
 **Objetivo** O desenvolvimento da aplicação deve ser realizado dentro do orçamento financeiro estabelecido para o projeto.
**Passos:**
1.	Monitorar regularmente os custos do projeto, incluindo despesas com, ferramentas e infraestrutura.

**Critérios de Êxito:**
Conclusão do projeto dentro do orçamento estabelecido.

#### 03
 **Objetivo** Garantir que a aplicação seja facilmente mantida e suportada após o lançamento.
**Passos:**
1.	Implementar uma estrutura de código limpa e organizada, facilitando futuras atualizações e correções.

**Critérios de Êxito:**
A aplicação deve ser facilmente atualizável e corrigível.