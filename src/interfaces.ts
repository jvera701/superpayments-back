export type DepartamentoNom =
  | 'VALLE'
  | 'ANTIOQUIA'
  | 'SANTANDER'
  | 'NORTE SANTANDER'
  | 'CALDAS'
  | 'BOGOTA'
  | 'CUNDINAMARCA'
  | 'CAQUETA'
  | 'QUINDIO'
  | 'RISARALDA'
  | 'CASANARE'
  | 'NARIÑO'
  | 'HUILA'
  | 'CESAR'
  | 'META'
  | 'STA MARTA D.E.'
  | 'TOLIMA'
  | 'CAUCA'
  | 'BARRANQUILLA'
  | 'SUCRE'
  | 'CARTAGENA'
  | 'BOLIVAR'
  | 'GUAJIRA'
  | 'ATLANTICO'
  | 'CORDOBA'
  | 'MAGDALENA'
  | 'ARAUCA'
  | 'BOYACA';

export type Sexo = 'F' | 'M';
export type FuenteTipoContagio = 'Comunitaria' | 'Relacionado';
export type Ubicacion = 'Casa' | 'Fallecido' | 'N/A';
export type Estado = 'Leve' | 'Fallecido' | 'N/A';
export type Recuperado = 'Recuperado' | 'Fallecido' | 'N/A';
export type TipoRecuperacion = 'Tiempo' | 'PCR';

export interface Person {
  fecha_reporte_web: string;
  id_de_caso: string;
  fecha_de_notificaci_n: string;
  departamento: string;
  departamento_nom: DepartamentoNom;
  ciudad_municipio: string;
  ciudad_municipio_nom: string;
  edad: string;
  unidad_medida: string;
  sexo: Sexo;
  fuente_tipo_contagio: FuenteTipoContagio;
  ubicacion: Ubicacion;
  estado: Estado;
  recuperado: Recuperado;
  fecha_inicio_sintomas?: string;
  fecha_diagnostico: string;
  fecha_recuperado?: string;
  tipo_recuperacion?: TipoRecuperacion;
  per_etn_: string;
  fecha_muerte?: string;
  nom_grupo_?: string;
}

export interface PersonQueryParams {
  sex?: Sexo;
  groupAge?: string;
}
