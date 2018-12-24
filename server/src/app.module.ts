import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { DishesController } from './dishes/dishes.controller';
import { DishSchema } from './dishes/dishes.schema';
import { DishesService } from './dishes/dishes.service';

@Module({
  imports: [
    //for localhost mongodb
    // MongooseModule.forRoot('mongodb://localhost/saicathk'),
    //for mlab mongodb
    MongooseModule.forRoot('mongodb://admin:admin123@ds139614.mlab.com:39614/saicathk'),
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
