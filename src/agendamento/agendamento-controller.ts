import { APIGatewayEvent, Context } from 'aws-lambda';
import { createAgendamentoService } from './agendamento-service';
import { Agendamento } from './agendamento-interface';
import { validateAgendamento } from './agendamento-validation';

export const createAgendamento = async (event: APIGatewayEvent, context: Context) => {
  try {
    // Verifica se o corpo da requisição existe
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ mensagem: 'Corpo da requisição ausente' }) };
    }

    const data: Agendamento = JSON.parse(event.body); // Converte o corpo da requisição para o tipo Agendamento
    const { error } = validateAgendamento(data);

    // Verifica se há algum erro de validação
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          mensagem: 'Dados de entrada inválidos',
          erro: error.details[0].message, // Detalhes do erro de validação
        }),
      };
    }

    // Cria o novo agendamento chamando o serviço
    const novoAgendamento = await createAgendamentoService(data);

    return {
      statusCode: 201,
      body: JSON.stringify({
        mensagem: 'Agendamento criado com sucesso',
        agendamento: novoAgendamento,
      }),
    };
  } catch (error: any) {
    // Retorna um erro genérico em caso de falha no processo
    return {
      statusCode: 500,
      body: JSON.stringify({
        mensagem: 'Erro ao criar agendamento',
        erro: error.message || 'Erro inesperado',
      }),
    };
  }
};
