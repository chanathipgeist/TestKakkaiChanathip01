FROM node:19-alpine3.15 as build
WORKDIR /app
COPY . .
RUN npm install


FROM node:19-alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install
COPY --from=build /app .
CMD [ "node","app.js" ]
