import { Test, TestingModule } from '@nestjs/testing';
import { AuthxController } from './authx.controller';
import { AuthxService } from './authx.service';

describe('AuthxController', () => {
  let authxController: AuthxController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthxController],
      providers: [AuthxService],
    }).compile();

    authxController = app.get<AuthxController>(AuthxController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authxController.getHello()).toBe('Hello World!');
    });
  });
});
