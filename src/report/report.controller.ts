import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dtos/create-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  async getReport() {
    const data = await this.reportService.getReport();

    return {
      message: 'success',
      data,
      code: 200,
    };
  }

  @Get('/strategies')
  async getStrategies() {
    const data = await this.reportService.getStrategies();

    return {
      message: 'success',
      data,
      code: 200,
    };
  }

  @Post()
  async createReport(@Body() body: CreateReportDto) {
    const data = await this.reportService.createReport(body);

    return {
      message: 'success',
      data,
      code: 200,
    };
  }

  @Get('/generatePdf')
  async generatePDF() {}
}
