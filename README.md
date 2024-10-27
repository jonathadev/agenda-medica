
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
│   └── index.ts                  # Ponto de entrada da aplicação// não tem
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
Melhorias
usar colocar dto em agendas
uma validacao em agendas? 

usar colocar dto em agendamento para validar post
mosks em agendamento nao usados

Sobre DTO
Se você está usando apenas a interface e não precisa da complexidade adicional que um DTO (Data Transfer Object) pode trazer, não é obrigatório manter ambos. A decisão de usar uma interface, um DTO ou ambos depende da arquitetura e dos requisitos do seu projeto. Vamos analisar as diferenças e quando usar cada um:

Quando usar apenas a Interface
Simplicidade: Se a estrutura de dados é simples e não precisa de transformação ou validação adicional, você pode usar apenas a interface.
Tipo de Dados: A interface pode ser suficiente para definir o formato dos dados que você está trabalhando. Isso é comum em situações onde você apenas deseja tipar dados recebidos ou enviados, sem realizar validações complexas.
Quando usar um DTO
Validação: Se você precisa validar a entrada de dados antes de usá-los na lógica de negócios, um DTO pode ser útil. Você pode aplicar validações diretamente ao DTO usando bibliotecas como Joi.
Transformação de Dados: Quando os dados recebidos precisam ser transformados ou processados antes de serem usados, um DTO pode ajudar a encapsular essa lógica.
Encapsulamento: Um DTO pode ser usado para encapsular dados que não devem ser diretamente expostos, ajudando a proteger sua lógica interna.

Resumindo
Se a interface é suficiente para atender às suas necessidades de tipo de dados e não há necessidade de validação ou transformação complexa, você pode manter apenas a interface.
Se você achar que precisa de validação e transformação de dados no futuro, pode considerar a introdução de um DTO posteriormente.
Fique à vontade para adaptar seu código conforme necessário! Se precisar de mais ajuda ou quiser discutir algo específico, é só avisar!


## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a Licença MIT.
```

Sinta-se à vontade para modificar qualquer parte desse modelo! Se precisar de mais informações ou se houver algo específico que você gostaria de adicionar, é só avisar.
