import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('App should be defined', () => {
    expect(app).toBeDefined();
  });

  it('App running test', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('Controller running...');
  });

  afterAll(async () => {
    await app.close();
  });
});
