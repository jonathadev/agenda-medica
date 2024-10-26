import { APIGatewayEvent, Context } from 'aws-lambda';
import { getAgendasService } from './service';

export const getAgendas = async (event: APIGatewayEvent, context: Context) => {
  const agendas = await getAgendasService();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};
