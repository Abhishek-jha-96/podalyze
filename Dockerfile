# =========================
# Stage 1: Base
# =========================
FROM node:20-alpine AS base
# Install pnpm globally
RUN npm install -g pnpm
# Create non-root user & group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Create working directory with proper ownership
RUN mkdir -p /home/appuser/app && chown -R appuser:appgroup /home/appuser/app
# Set User
USER appuser
WORKDIR /home/appuser/app
# Setup pnpm cache inside user home
ENV PNPM_HOME=/home/appuser/.pnpm
ENV PATH=$PNPM_HOME:$PATH

# =========================
# Stage 2: Builder (production only)
# =========================
FROM base AS builder
# Copy manifests and install deps
COPY --chown=appuser:appgroup package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
# Build-time env
ARG VITE_BASE_API_URL
RUN echo "VITE_BASE_API_URL=${VITE_BASE_API_URL}" > .env.production
# Copy full source and build
COPY --chown=appuser:appgroup . .
RUN pnpm run build

# =========================
# Stage 3: Runtime
# =========================
FROM base AS runtime
# Copy manifests & install deps (runtime only, no devDeps if you like)
COPY --chown=appuser:appgroup package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
# Default ENV
ENV PORT=5173

# -----------------
# Production mode
# -----------------
FROM runtime AS prod
# Copy built outputs from builder
COPY --chown=appuser:appgroup --from=builder /home/appuser/app/build ./build
COPY --chown=appuser:appgroup --from=builder /home/appuser/app/public ./public
EXPOSE 5173
CMD ["pnpm", "start"]

# -----------------
# Development mode (hot reload)
# -----------------
FROM runtime AS dev
# For development, run as root to avoid permission issues
USER root
# Copy source for hot-reload
COPY . .
# Install dependencies if needed
RUN pnpm install --frozen-lockfile
# Expose dev server port
EXPOSE 5173
# Run react-router dev server
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]