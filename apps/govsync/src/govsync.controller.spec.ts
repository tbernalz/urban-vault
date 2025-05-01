import { Test, TestingModule } from '@nestjs/testing';
import { GovsyncController } from './govsync.controller';
import { GovsyncService } from './govsync.service';

describe('GovsyncController', () => {
  let govsyncController: GovsyncController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GovsyncController],
      providers: [GovsyncService],
    }).compile();

    govsyncController = app.get<GovsyncController>(GovsyncController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(govsyncController.getHello()).toBe('Hello World!');
    });
  });
});
