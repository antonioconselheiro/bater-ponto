import { Module } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import { DataSource } from 'typeorm';
import { DataEntity } from '../../entity/data.entity';
import { HoraEntity } from '../../entity/hora.entity';

@Module({
  providers: [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: environment.mysqlHost,
          port: environment.mysqlPort,
          username: environment.mysqlUser,
          password: environment.mysqlPass,
          database: environment.mysqlDatabase,
          entities: [
            HoraEntity,
            DataEntity
          ],
          synchronize: environment.mysqlTypeORMSynchronize
        });
  
        return dataSource.initialize();
      }
    }
  ]
})
export class DataSourceModule {}
