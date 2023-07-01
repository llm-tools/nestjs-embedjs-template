import { Module } from '@nestjs/common';
import { EmbedService } from './embedjs.service.js';

@Module({
    providers: [EmbedService],
    exports: [EmbedService],
})
export class EmbedjsModule {}
