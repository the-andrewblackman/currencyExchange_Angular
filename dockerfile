FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
# copy and paste 'output-path' from angular.json, then add '/app/' before it
COPY --from=build /app/dist/angular-converter /usr/share/nginx/html
# after container is running, go to localhost:80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
