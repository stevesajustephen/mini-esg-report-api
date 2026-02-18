import { Injectable } from '@nestjs/common';
import { AiProvider } from './ai.provider';
import { Report } from 'src/report/entities/report.entity';

@Injectable()
export class MockAiService implements AiProvider {
  async generateStrategies(data: Report | null): Promise<string[]> {
    const strategies = await new Promise((res) => {
      setTimeout(() => {
        res([
          `A Short. COmpany ${data?.companyName} scope 1 is ${data?.scope1}`,
          `B Medium. COmpany ${data?.companyName} scope 1 is ${data?.scope1} scope 2 is ${data?.scope2}`,
          `C Detailed. COmpany ${data?.companyName} scope 1 is ${data?.scope1} scope 2 is ${data?.scope2} scope 3 is ${data?.scope3}`,
        ]);
      }, 200);
    });

    return strategies as string[];
  }
}
