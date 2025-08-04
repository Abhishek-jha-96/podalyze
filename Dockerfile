# Stage 1: Builder for production builds
FROM node:20-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

ARG VITE_BASE_API_URL
RUN echo "VITE_BASE_API_URL=${VITE_BASE_API_URL}" > .env.production
COPY . .
RUN pnpm run build


# Stage 2: Runtime container for both dev and prod
FROM node:20-alpine

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Always copy everything to support both modes
COPY . .
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

ENV PORT=5173

# Entrypoint determines mode
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 5173
CMD ["sh", "/usr/local/bin/entrypoint.sh"]
