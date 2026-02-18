import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryColumn({ default: 1 })
  id: number;

  @Column()
  companyName: string;

  @Column()
  reportingYear: number;

  @Column()
  scope1: number;

  @Column()
  scope2: number;

  @Column({ nullable: true })
  scope3: number;

  @Column({ nullable: true })
  consumption: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  strategy: string;
}
