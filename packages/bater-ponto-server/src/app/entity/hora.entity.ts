import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DataEntity } from "./data.entity";

@Entity()
export class HoraEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  hora!: string;

  @Column()
  descricao?: string;

  @ManyToOne(() => DataEntity, (data) => data.pontos)
  data!: Promise<DataEntity>;
}