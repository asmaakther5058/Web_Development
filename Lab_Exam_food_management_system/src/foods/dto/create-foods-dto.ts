import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';



export class CreateFoodDto {
  @IsDefined({
    message: 'Food ID is required',
  })


  @IsString({
    message: 'Food ID must be a string',
  })
  
  @IsNotEmpty({
    message: 'Food ID cannot be empty',
  })
  id!: string;






  @IsDefined({
    message: 'Food name is required',
  })
  @IsString({
    message: 'Food name must be a string',
  })
  @IsNotEmpty({
    message: 'Food name cannot be empty',
  })
  foodname!: string;

  @IsDefined({
    message: 'Food price is required',
  })



  @IsNumber(
    {},
    {
      message: 'Food price must be a valid number',
    },
  )
  @Min(0, {
    message: 'Food price cannot be negative',
  })
  price!: number;
}