import path from 'path';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { LLMApplication, LLMApplicationBuilder } from '@llmembed/embedjs';
import { YoutubeLoader } from '@llmembed/embedjs/loader/youtube';
import { LanceDb } from '@llmembed/embedjs/databases/lance';
import { WebLoader } from '@llmembed/embedjs/loader/web';

@Injectable()
export class EmbedService implements OnModuleDestroy, OnModuleInit {
    private llmApplication: LLMApplication;

    public async query(query: string) {
        return this.llmApplication.query(query);
    }

    async onModuleInit() {
        this.llmApplication = await new LLMApplicationBuilder()
            .setTemperature(0.1)
            .addLoader(new YoutubeLoader({ videoIdOrUrl: 'https://www.youtube.com/watch?v=w2KbwC-s7pY' }))
            .addLoader(new WebLoader({ url: 'https://adhityan.com/' }))
            .setVectorDb(new LanceDb({ path: path.resolve('./db') }))
            .build();
    }

    onModuleDestroy() {}
}
