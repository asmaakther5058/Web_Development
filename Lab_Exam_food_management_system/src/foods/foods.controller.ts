import { Controller, Post, Body } from '@nestjs/common';
import { FoodService } from './foods.service.js';
import { CreateFoodDto } from './dto/create-foods-dto.js';
 
@Controller('foods')
export class FoodController {
  constructor(
    private readonly foodService: FoodService,
  ) {}
 
  @Post('create-foods')
  createEmployee(@Body() dto: CreateFoodDto) {
    return this.foodService.createFood(dto);
  }
}