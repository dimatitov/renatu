FROM node:12-alpine as build
#FROM tiangolo/node-frontend:10 as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
#CMD ["npm", "start"]
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
#COPY nginx.conf etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

