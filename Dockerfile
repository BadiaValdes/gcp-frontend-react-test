FROM node:12-slim

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["serve", "-s", "-l", "80", "./build"]