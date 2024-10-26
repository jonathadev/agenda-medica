
```markdown
# Agenda Médica

Um sistema simples de agendamento de consultas médicas, permitindo que os pacientes visualizem médicos disponíveis e agendem consultas.

## Funcionalidades

- **Listar Médicos**: Endpoint para listar médicos disponíveis com seus horários.
- **Criar Agendamento**: Endpoint para agendar consultas com um médico específico.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipos.
- **Joi**: Biblioteca para validação de dados.
- **Serverless Framework**: Para deploy de funções em AWS Lambda.
- **Jest**: Framework de testes para JavaScript.

## Estrutura do Projeto

```plaintext
agenda-medica/
│
├── src/
│   ├── agenda/
│   │   ├── controller.ts         # Controlador para agendamento
│   │   ├── interface.ts          # Interfaces para o projeto
│   │   ├── mocks.ts              # Dados mockados para testes //desnecessario
│   │   ├── service.ts            # Serviços de agendamento
│   │   └── validation.ts          # Validação dos dados de entrada
           └── /tests/
               └── service.test.ts
│   │
│   ├── agendamento/
│   │   ├── controller.ts         # Controlador para agendamentos
│   │   ├── interface.ts          # Interfaces para agendamentos
│   │   ├── dto.ts                # Descrição do DTO para agendamentos //desnecessario
│   │   ├── mocks.ts              # Dados mockados para agendamentos
│   │   ├── service.ts            # Serviços de agendamento
│   │   └── validation.ts          # Validação dos dados de entrada
│   │
│   └── index.ts                  # Ponto de entrada da aplicação// nao ten
│
├── package.json                   # Dependências e scripts do projeto
└── serverless.yml                # Configuração do Serverless Framework
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jonathadev/agenda-medica
   cd agenda-medica
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor localmente, execute o seguinte comando:

```bash
npx serverless offline
```

O servidor estará disponível em `http://localhost:3000`.

rodando o npx serverless offline aparece mais endppoints entre eles
endpoints

get /agendas (http://localhost:3000/agendas)
post /agendamento (http://localhost:3000/agendamento)


## Testes

Para rodar os testes, utilize o seguinte comando:

```bash
npm run test
```

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a Licença MIT.
```

Sinta-se à vontade para modificar qualquer parte desse modelo! Se precisar de mais informações ou se houver algo específico que você gostaria de adicionar, é só avisar.
