import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'These are the rider coordinates';
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return createCoordinatesDto;
  }
}
