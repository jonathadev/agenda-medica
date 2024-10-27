import { Medico } from './agenda-interface';
import { mockAgendas } from './agenda-mocks';

export const getAgendasService = async (): Promise<Medico[]> => {
  // Simula a recuperação de dados de médicos e horários disponíveis
  return mockAgendas;
};
