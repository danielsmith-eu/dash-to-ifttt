FROM node:7.1-alpine
USER root
RUN apk add --no-cache git python build-base libpcap libpcap-dev
COPY package.json package.json
RUN npm install
COPY dash.js dash.js
COPY config.json config.json
CMD ["node", "dash.js"]
