import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DishesDTO } from './dishes.dto';

@Injectable()
export class DishesService {
    constructor(@InjectModel('Dish') private dishModel: Model<DishesDTO>){

    }

    async createDish(dishesDto: DishesDTO): Promise<DishesDTO> {
        const dish = new this.dishModel(dishesDto);
        return await dish.save();
    }

    async getDishes(): Promise<DishesDTO[]> {
        return await this.dishModel.find().exec();
    }

    async getDish(id): Promise<DishesDTO> {
        return await this.dishModel.findOne({_id: id});
    }
}