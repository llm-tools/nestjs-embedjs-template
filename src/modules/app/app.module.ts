import 'dotenv/config';
import { Module } from '@nestjs/common';

import { EmbedjsModule } from '../embedjs/embedjs.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
    imports: [EmbedjsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
