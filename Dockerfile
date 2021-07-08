FROM node:14.16 as buildImage
WORKDIR /app
COPY . .
RUN yarn
RUN yarn prod
EXPOSE 8080
FROM nginx:1.18
LABEL authors="Duc Tran"
COPY --from=buildImage /app/build /usr/share/nginx/html
COPY nginx-host /etc/nginx/conf.d/default.conf