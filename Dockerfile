# Stage 1: Build the application
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy lock and manifest files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application (includes SSR server + client bundle)
RUN pnpm run build

# Stage 2: Production server
FROM node:20-alpine

# Install pnpm and react-router-serve globally
RUN npm install -g pnpm

# Create working directory
WORKDIR /app

# Copy runtime deps only (optional for minimal image)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy the built server & client assets
COPY --from=builder /app/build ./build

# Copy static/public assets (if used)
COPY --from=builder /app/public ./public

# Expose the port used by the app
EXPOSE 5173

ENV PORT=5173

# Start the SSR server
CMD ["pnpm", "start"]