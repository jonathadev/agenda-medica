import { getAgendasService } from '../service';

jest.mock('../service', () => ({
  getAgendasService: jest.fn(),
}));

describe('getAgendasService', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa as chamadas anteriores entre os testes
  });

  it('deve retornar uma lista de médicos com horários disponíveis', async () => {
    // Mock do retorno da função
    (getAgendasService as jest.Mock).mockResolvedValue([
      {
        nome: 'Dr. João Silva',
        especialidade: 'Cardiologia',
        horariosDisponiveis: ['09:00', '10:00', '14:00'],
      },
      {
        nome: 'Dra. Maria Oliveira',
        especialidade: 'Pediatria',
        horariosDisponiveis: ['08:00', '11:00', '15:00'],
      },
    ]);

    const result = await getAgendasService();

    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty('nome', 'Dr. João Silva');
    expect(result[1]).toHaveProperty('nome', 'Dra. Maria Oliveira');
    expect(result[0]).toHaveProperty('especialidade', 'Cardiologia');
    expect(result[1]).toHaveProperty('especialidade', 'Pediatria');
  });
});
