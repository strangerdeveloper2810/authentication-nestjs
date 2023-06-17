import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// This service is used to connect db
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'ostgresql://postgres:Abc123456789@localhost:5434/testdb?schema=public',
        },
      },
    });
  }
}
