import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * DTOとクラスバリデーションを有効化するために必要な処理
   */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  /**
   * CORSの設定
   * ホワイトリストにバックエンドへのアクセスを許可したいフロントエンドのドメインを指定する
   * フロント、バックエンドでCookieベースでJWTトークンを通信するためにcredentialsをtrueに設定。
   */
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
