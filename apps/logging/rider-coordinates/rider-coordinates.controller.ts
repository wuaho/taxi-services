import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}
  @Get(':id')
  async getRiderCoordinates(@Param() params: any) {
    console.log('params', params);
    return this.riderCoordinatesService.getRiderCoordinates(params.id);
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
