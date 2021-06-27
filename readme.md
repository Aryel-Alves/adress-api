

# **Address API**
API para calculo de distancia euclidiana entre endereços 

### Como rodar localmente 
  1. Instale as dependencias do projeto utilizando o comando: ``` NPM INSTALL ```
  2. Vá até o arquivo env.ts de configuração de variaveis de hambiente localizado em   ```src\main\config\env.ts ```
  3. Altere a Variavel de Hambiente <b>googleGeolocationApiToken</b> para um token valido apara a API de geolocalização do google (https://developers.google.com/maps/documentation/geocoding/get-api-key)
  4. Execute o comando ``` NPM RUN BUILD ``` para construir a API
  5. Para Iniciar a API utilize o comando: ``` NPM START ```
  
  a aplicação iniciara como padrão no endereço http://localhost:5050 !

### Documentação

Para vizualização da documentação da api basta acessar no navegador o endpoint   [**/api-docs**](http://localhost:5050/api-docs) la existe uma breve explicação de como chamar o endpoint de calculo

<p align="center">
  <img src="https://imgur.com/cQ9su3b.png">
</p> 