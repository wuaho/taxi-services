import { Controller } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';
import { Rider } from './interfaces/rider.interface';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @MessagePattern({ cmd: 'get-rider' })
  async getRider(data: any): Promise<Rider> {
    console.log('Datos');
    return Promise.resolve({
      id: data.id,
      firstName: 'Juanjo',
      lastName: 'Requena',
      age: 25,
      email: 'juanjo@test.com',
      address: 'Calle Pureza Numero 1, Sevilla',
      phone: '010-9808-1234',
    });
  }
}
