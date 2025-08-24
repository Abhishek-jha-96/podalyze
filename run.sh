#!/usr/bin/env bash
set -e

COMPOSE_FILE="compose.yml"

# Default to dev, allow switching to prod
MODE=${2:-dev}

if [ "$MODE" = "prod" ]; then
  SERVICE_NAME="frontend-prod"
  PROFILE="--profile prod"
else
  SERVICE_NAME="frontend-dev"
  PROFILE="--profile dev"
fi

CONTAINER_NAME="podalyze_${SERVICE_NAME}"
APP_PATH="/home/appuser/app"


case "$1" in
  build)
    echo "▶️ Building and starting ($MODE)..."
    podman compose -f "$COMPOSE_FILE" --env-file .env $PROFILE up -d --build
    ;;
  up)
    echo "▶️ Starting containers ($MODE)..."
    podman compose -f "$COMPOSE_FILE" --env-file .env $PROFILE up -d
    ;;

  down)
    echo "🛑 Stopping containers..."
    podman compose -f "$COMPOSE_FILE" $PROFILE down
    ;;

  logs)
    podman compose -f "$COMPOSE_FILE" $PROFILE logs -f
    ;;

  *)
    echo "Usage: $0 {build|up|down|logs} [dev|prod]"
    exit 1
    ;;
esac
