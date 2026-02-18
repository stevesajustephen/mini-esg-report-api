import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReportDto {
  @IsString()
  companyName: string;

  @IsNumber()
  reportingYear: number;

  @IsNumber()
  scope1: number;

  @IsNumber()
  scope2: number;

  @IsNumber()
  @IsOptional()
  scope3?: number;

  @IsNumber()
  @IsOptional()
  consumption?: number;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsOptional()
  strategy?: string;
}
