FROM python:3.9.18-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

RUN chmod u+x ./docker-entrypoint.sh

RUN mkdir -p /app/media/

EXPOSE 8000

ENTRYPOINT ["./docker-entrypoint.sh"]
