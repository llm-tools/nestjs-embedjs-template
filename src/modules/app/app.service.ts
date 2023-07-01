import { Inject, Injectable } from '@nestjs/common';
import { EmbedService } from '../embedjs/embedjs.service.js';

@Injectable()
export class AppService {
    @Inject()
    private embedService: EmbedService;

    getHello(): Promise<string> {
        return this.embedService.query('Who is Adhityan?');
    }
}
