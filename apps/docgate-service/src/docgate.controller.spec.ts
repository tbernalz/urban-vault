import { Test, TestingModule } from '@nestjs/testing';
import { DocgateController } from './docgate.controller';
import { DocgateService } from './docgate.service';

describe('DocgateController', () => {
  let docgateController: DocgateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocgateController],
      providers: [DocgateService],
    }).compile();

    docgateController = app.get<DocgateController>(DocgateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(docgateController.getHello()).toBe('Hello World!');
    });
  });
});
