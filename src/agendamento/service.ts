import { Agendamento } from './interface'; // Certifique-se de importar a interface

export const createAgendamentoService = async (data: Agendamento) => {
  // Aqui você pode adicionar lógica para verificar a disponibilidade do médico
  // e armazenar o agendamento em um banco de dados se necessário.

  return {
    id: Math.floor(Math.random() * 1000), // Simula um ID gerado
    medico: `Dr. João Silva`, // Mockado
    paciente: data.paciente_nome, // Usar o campo correto
    data_horario: data.data_horario, // Usar o campo correto
  };
};
