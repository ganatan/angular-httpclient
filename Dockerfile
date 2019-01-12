FROM node:10.13.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run build:ssr

EXPOSE 4000
CMD [ "npm", "run", "serve:ssr" ]
