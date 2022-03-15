import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('BlackList')
export class BlackList {
  @PrimaryColumn()
  readonly id: string;

  @Column()
    cpf: string;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
} 