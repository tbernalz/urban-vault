import { Test, TestingModule } from '@nestjs/testing';
import { DocmanageController } from './docmanage.controller';
import { DocmanageService } from './docmanage.service';

describe('DocmanageController', () => {
  let docmanageController: DocmanageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocmanageController],
      providers: [DocmanageService],
    }).compile();

    docmanageController = app.get<DocmanageController>(DocmanageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(docmanageController.getHello()).toBe('Hello World!');
    });
  });
});
