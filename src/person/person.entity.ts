import {
  DepartamentoNom,
  Estado,
  FuenteTipoContagio,
  Recuperado,
  Sexo,
  TipoRecuperacion,
  Ubicacion,
} from '../interfaces';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('person')
export class Person {
  @PrimaryColumn({ type: 'varchar' })
  id_de_caso: string;

  @Column({ type: 'timestamptz' })
  fecha_reporte_web: Date;

  @Column({ type: 'timestamptz' })
  fecha_de_notificaci_n: Date;

  @Column({ type: 'varchar' })
  departamento: string;

  @Column({ type: 'varchar' })
  departamento_nom: DepartamentoNom;

  @Column({ type: 'varchar' })
  ciudad_municipio: string;

  @Column({ type: 'varchar' })
  ciudad_municipio_nom: string;

  @Column({ type: 'varchar' })
  edad: string;

  @Column({ type: 'varchar' })
  unidad_medida: string;

  @Column({ type: 'varchar' })
  sexo: Sexo;

  @Column({ type: 'varchar' })
  fuente_tipo_contagio: FuenteTipoContagio;

  @Column({ type: 'varchar' })
  ubicacion: Ubicacion;

  @Column({ type: 'varchar' })
  estado: Estado;

  @Column({ type: 'varchar' })
  recuperado: Recuperado;

  @Column({ type: 'timestamptz', nullable: true })
  fecha_inicio_sintomas?: Date;

  @Column({ type: 'timestamptz' })
  fecha_diagnostico: Date;

  @Column({ type: 'timestamptz', nullable: true })
  fecha_recuperado?: Date;

  @Column({ type: 'varchar', nullable: true })
  tipo_recuperacion?: TipoRecuperacion;

  @Column({ type: 'varchar' })
  per_etn_: string;

  @Column({ type: 'timestamptz', nullable: true })
  fecha_muerte?: Date;

  @Column({ type: 'varchar', nullable: true })
  nom_grupo_?: string;
}
