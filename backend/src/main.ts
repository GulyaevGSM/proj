import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common'
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'
import * as passport from 'passport';

async function bootstrap() {
  const { PORT, COOKIE_SECRET } = process.env

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  app.use(
    session({
      secret: COOKIE_SECRET,
      saveUninitialized: false,
      resave: false,
      name: 'AVITO_APP_SESSION_ID',
      cookie: {
        maxAge: 86400000, // cookie expires 1 day later
      },
    }),
  )

  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(PORT || 9001, () => {
      console.log(`Running on Port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}
bootstrap()
