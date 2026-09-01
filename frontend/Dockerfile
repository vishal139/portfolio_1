FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./

FROM base AS dev

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM base AS build

ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:5001
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine AS prod

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
