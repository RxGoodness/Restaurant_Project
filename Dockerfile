FROM node:10.16.1-alpine
WORKDIR /goodMeal
ADD . .
ADD package*.json /.
RUN npm install
CMD npm start
