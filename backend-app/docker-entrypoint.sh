#! /bin/bash

echo "Applying database migrations"
./manage.py migrate

echo "Running collectstatic"
./manage.py collectstatic --noinput

echo "Starting Server"
gunicorn sample_project.wsgi:application --bind 0.0.0.0:8000
