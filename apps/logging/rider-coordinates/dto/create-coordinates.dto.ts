import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinatesDto {
  @IsNotEmpty({ message: 'lat is required' })
  @IsNumber({}, { message: 'lat must be a number' })
  lat: number;

  @IsNotEmpty({ message: 'long is required' })
  @IsNumber({}, { message: 'long must be a number' })
  long: number;

  @IsNotEmpty({ message: 'rider is required' })
  @IsString({ message: 'rider must be a string' })
  rider: string;
}
