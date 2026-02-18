import { Module } from '@nestjs/common';
import { MockAiService } from './mock-ai.service';
import { AiProvider } from './ai.provider';

@Module({
  providers: [
    {
      provide: AiProvider,
      useClass: MockAiService,
    },
  ],
  exports: [AiProvider],
})
export class AiModule {}
