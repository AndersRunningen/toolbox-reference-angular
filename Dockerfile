FROM nginx:1.21.4-alpine

COPY ./dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
