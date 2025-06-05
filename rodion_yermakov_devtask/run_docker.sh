#!/bin/sh
PROJECT_DIR="customer-api"
cd "$PROJECT_DIR" || exit

echo "Building and running the Docker container..."
docker-compose up --build
