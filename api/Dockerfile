FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./

FROM base AS dev

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

FROM base AS prod

ENV NODE_ENV=production

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["npm", "start"]