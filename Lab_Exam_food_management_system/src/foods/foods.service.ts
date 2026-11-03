 
 
import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-foods-dto';
 
@Injectable()
export class FoodService {
  private foods: CreateFoodDto[] = [];
 
  createFood(dto: CreateFoodDto) {
    this.foods.push(dto);
 
    return {
      message: 'Food created successfully',
      data: dto,
    };
  }
}
 
 
 