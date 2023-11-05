
# Setup

### Ajsutes:
#### 1. Nos 3 requests do Dashboard que estavam sendo chamados duas fezes, fiz o comentário da api strict mode, que roda tudo duplicado somente no ambiente de desenvolvimento para ajudar na depuração do desenvolvimento;

#### 2. Listagem também fooi solucionada com a alteração acima;
#### 3. Ajustado para quando entrar com algum filtro redirecionar para primeira pagina resolveu o problema;
#### 4. Meu preset estava configurado para usar 4 spaces nos arquivos js e 2 no jsx, alterei o spacing dos arquivos js e foi sanado este problema;
#### 5. Removido os consoles.log;
#### 6. Removido os hooks que não estavam sendo utilizados, havia deixado para mostrar e falar também um pouco dos meus erros no desenvolvimento;
#### 7. Testes unitários implementados;

### Passo a passo
Clone Repositório
```sh
git clone https://github.com/will14n/texoitFrontProject [nome_da_pasta_desejada]
```
```sh
cd [nome_da_pasta_desejada]
```

Instalar as dependências
```sh
npm install
```
Rodar o projeto com o comando
```sh
npm run dev
```

Rodar os tests com o comando
```sh
npm run test
```
