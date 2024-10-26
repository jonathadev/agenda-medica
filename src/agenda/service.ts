import { Medico } from './interface';
import { mockAgendas } from './mocks';

export const getAgendasService = async (): Promise<Medico[]> => {
  // Simula a recuperação de dados de médicos e horários disponíveis
  return mockAgendas;
};
