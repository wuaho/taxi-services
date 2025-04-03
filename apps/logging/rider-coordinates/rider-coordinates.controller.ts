import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}
  @Get()
  getRiderCoordinates() {
    return 'These are the rider coordinates';
  }

  @Post()
  async saveRiderCoordinates(
    @Body() createCoordinatesDto: CreateCoordinatesDto,
  ): Promise<RiderCoordinates> {
    return await this.riderCoordinatesService.saveRiderCoordinates(
      createCoordinatesDto,
    );
  }
}
