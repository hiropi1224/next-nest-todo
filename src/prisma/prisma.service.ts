import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable() // PrismaClientのクラスの機能を取り込むためにPrismaClientをextendsで継承する
export class PrismaService extends PrismaClient {
  // ConfigServiceをDIする
  constructor(private readonly config: ConfigService) {
    // superを使うことで継承しているPrismaClientの中のコンストラクターを参照できる
    super({
      // datasourcesのoptionsのdbに今回のpostgresqlのURLパスを設定する
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
