import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinates.name)
    private riderCoordinatesModel: Model<RiderCoordinates>,
    @Inject('RIDER_SERVICE') private riderClient: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string) {
    const coordinates = await this.riderCoordinatesModel.find({
      rider: riderId,
    });
    const rider = await this.getRider(riderId);
    return { coordinates, rider };
  }

  async saveRiderCoordinates(
    createCoordinatesDto: CreateCoordinatesDto,
  ): Promise<RiderCoordinates> {
    return await this.riderCoordinatesModel.create(createCoordinatesDto);
  }

  private async getRider(riderId: string) {
    try {
      const rider = await firstValueFrom(
        this.riderClient.send({ cmd: 'get-rider' }, { id: riderId }),
      );
      return rider;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
