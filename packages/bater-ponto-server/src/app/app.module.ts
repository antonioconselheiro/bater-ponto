import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceModule } from './shared/data-source/data-source.module';
import { HoraConverter } from './hora.converter';
import { DataConverter } from './data.converter';

@Module({
  imports: [DataSourceModule],
  controllers: [AppController],
  providers: [
    AppService,
    HoraConverter,
    DataConverter
  ]
})
export class AppModule {}
