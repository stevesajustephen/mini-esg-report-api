import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { AiProvider } from 'src/ai/ai.provider';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report) private readonly repo: Repository<Report>,
    private readonly aiProvider: AiProvider,
  ) {}

  async createReport(reportData: Partial<Report>): Promise<Report | null> {
    try {
      const data = await this.repo.save({ ...reportData, id: 1 });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getReport(): Promise<Report | null> {
    try {
      const data = await this.repo.findOne({ where: { id: 1 } });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getStrategies() {
    try {
      const data = await this.getReport();

      const strategies = await this.aiProvider.generateStrategies(data);
      return strategies;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async generateReport() {}
}
