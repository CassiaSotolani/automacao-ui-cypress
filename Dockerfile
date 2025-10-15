# Usa uma imagem base com Node.js e ferramentas para rodar navegadores
FROM cypress/browsers:node-22.20.0-chrome-141.0.7390.54-1-ff-143.0.4-edge-141.0.3537.57-1

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se existir)
# para aproveitar o cache do Docker e acelerar o build
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o container
COPY . .

# Comando padrão para rodar os testes
# Usa a variável de ambiente para executar o comando npm test
# ou diretamente o Cypress
CMD ["npx", "cypress", "run"]