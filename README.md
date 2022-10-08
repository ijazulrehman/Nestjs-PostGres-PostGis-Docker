# Job Offer Filteration

## Tech stack

- [Nest](https://github.com/nestjs/nest)
- Docker
- PostGreSQL
- TypeORM

## Docker Compose

Need to run

```bash
$ docker-compose up -d
```

# Migrations

Need to run

```bash
$ yarn run db:migrate
```

_After docker compose and migrations, Application will start on port `4040`. Navigate to [App](http://localhst:4040)_

## Testing Application

For Documentation [Swagger](https://swagger.io/) has been congfigure.
To hit the APIs navigate to [Documentation](http://localhst:4040/docs) after running the app.
