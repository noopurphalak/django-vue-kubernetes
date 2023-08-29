FROM --platform=linux/amd64 node:18.17 AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build


FROM --platform=linux/amd64 nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

WORKDIR /etc/nginx/conf.d/
RUN rm default.conf
COPY ./nginx/nginx.conf .
ENTRYPOINT ["nginx", "-g", "daemon off;"]