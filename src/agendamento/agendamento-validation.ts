import Joi from 'joi';

export const validateAgendamento = (data: any) => {
  const schema = Joi.object({
    medico_id: Joi.number().required(),
    paciente_nome: Joi.string().required(),
    data_horario: Joi.string().isoDate().required(),
  });
  
  return schema.validate(data);
};
