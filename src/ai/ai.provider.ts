import { Report } from 'src/report/entities/report.entity';

export abstract class AiProvider {
  generateStrategies: (data: Report | null) => Promise<string[]>;
}
