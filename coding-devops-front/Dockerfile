FROM node:18-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli@17.3.2

RUN npm install

COPY . /usr/src/app

EXPOSE 4200:4200

CMD ["ng", "serve", "--host", "0.0.0.0"]




