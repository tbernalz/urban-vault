import { Test, TestingModule } from '@nestjs/testing';
import { NotifyhubController } from './notifyhub.controller';
import { NotifyhubService } from './notifyhub.service';

describe('NotifyhubController', () => {
  let notifyhubController: NotifyhubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotifyhubController],
      providers: [NotifyhubService],
    }).compile();

    notifyhubController = app.get<NotifyhubController>(NotifyhubController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notifyhubController.getHello()).toBe('Hello World!');
    });
  });
});
