import { Test, TestingModule } from '@nestjs/testing';
import { DishesController } from './dishes.controller';

describe('Dishes Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DishesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DishesController = module.get<DishesController>(DishesController);
    expect(controller).toBeDefined();
  });
});
