import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DishesDTO } from './dishes.dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
    constructor(private dishesService: DishesService){

    }

    @Get()
    async getdishes(){
        return await this.dishesService.getDishes();
    }
    @Get(':id')
    async getdish(@Param('id') id){
        return await this.dishesService.getDish(id);
    }

    @Post()
    async createDish(@Body() dish: DishesDTO){
        console.log(dish);
        return await this.dishesService.createDish(dish);
    }
    
}
