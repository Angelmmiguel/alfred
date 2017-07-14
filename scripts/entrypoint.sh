#!/bin/bash

export PATH="/app/node_modules/.bin:$PATH"

db_is_ready() {
  echo "Waiting for Postgres..."
  until pg_isready -h "database" > /dev/null 2> /dev/null; do
    sleep 1
  done
  echo "Postgres is up"
}

# Wait for the database
if [ -z ${DATABASE_URL+x} ]; then
  echo "Ignoring PostgreSQL initialization";
else
  db_is_ready;
fi

# Install yarn
echo "Checking dependencies..."
if ! yarn check > /dev/null 2>&1; then
  echo "Updating dependencies..."
  yarn install
else
  echo "All dependencies are up to date"
fi

exec "$@"
