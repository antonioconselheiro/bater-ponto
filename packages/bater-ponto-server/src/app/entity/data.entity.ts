import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HoraEntity } from "./hora.entity";

@Entity()
export class DataEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  dia!: string;

  @OneToMany(() => HoraEntity, hora => hora.data, {
    eager: true
  })
  pontos?: HoraEntity[];
}