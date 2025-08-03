#!/bin/sh

echo "Running in $ENVIRONMENT mode..."

if [ "$ENVIRONMENT" = "development" ]; then
  pnpm dev --host
else
  pnpm start
fi
