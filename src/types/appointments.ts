export type AppointmentDto = {
  id?: number;
  dia: string;
  razao_consulta: string;
  necessidade_especial: string;
  pcd: boolean;
  doenca_cronica: boolean;
  especialidades_id: number;
  horas: string;
  status?: 'pendente' | 'concluído' | 'cancelado';
  cancelado?: false;
  pacientes_id?: number;
  doutores_id?: number;
  criado_em?: string;
  nomePaciente?: string;
  nomeDoutor?: string;
  nomeEspecialidade?: string;
};
