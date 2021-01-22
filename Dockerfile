FROM node:latest

RUN npm install -g http-server

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]