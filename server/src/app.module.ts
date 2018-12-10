import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { DishesController } from './dishes/dishes.controller';
import { DishSchema } from './dishes/dishes.schema';
import { DishesService } from './dishes/dishes.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/saicathk'),
    MongooseModule.forFeature([
      {
        name: 'Dish',
        schema: DishSchema
      }
    ])
  ],
  controllers: [AppController, DishesController],
  providers: [AppService, DishesService],
})
export class AppModule {}
