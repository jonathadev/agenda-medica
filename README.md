
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

agenda-medica/
│
├── src/
│   ├── agenda/
│   │   ├── agenda-controller.ts     # Controlador para operações de agendas
│   │   ├── agenda-interface.ts      # Interface para a estrutura de dados de agendas
│   │   ├── agenda-service.ts        # Serviços relacionados às agendas
│   │   ├── agenda-validation.ts     # Validação dos dados de entrada de agendas
│   │   └── /tests/
│   │       └── agenda-service.test.ts # Testes unitários para o serviço de agendas
│   │
│   ├── agendamento/
│   │   ├── agendamento-controller.ts # Controlador para operações de agendamentos
│   │   ├── agendamento-interface.ts  # Interface para estrutura de dados de agendamentos
│   │   ├── agendamento-dto.ts        # DTO para padronização de dados de agendamentos
│   │   ├── agendamento-mocks.ts      # Dados mockados para testes de agendamentos
│   │   ├── agendamento-service.ts    # Serviços relacionados aos agendamentos
│   │   └── agendamento-validation.ts # Validação dos dados de entrada de agendamentos
│
├── package.json                       # Dependências e scripts do projeto
├── serverless.yml                     # Configuração do Serverless Framework
└── README.md                          # Documentação do projeto


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

  GET  | http://localhost:3000/agendas                                              │
   │   POST | http://localhost:3000/2015-03-31/functions/getAgendas/invocations          │
   │   POST | http://localhost:3000/agendamento                                          │
   │   POST | http://localhost:3000/2015-03-31/functions/createAgendamento/invocations 


## Sobre endpoints 

/invocations

O endpoint `POST | http://localhost:3000/2015-03-31/functions/getAgendas/invocations` que você está vendo é uma URL gerada pelo framework Serverless quando você está rodando suas funções AWS Lambda localmente usando o plugin `serverless-offline`. Aqui está uma breve explicação sobre o que isso significa:

### Estrutura do Endpoint

- **`POST`**: Esse é o método HTTP que está sendo utilizado para chamar a função. Normalmente, as funções Lambda são invocadas via `POST`.

- **`http://localhost:3000`**: Isso indica que o servidor está rodando localmente na sua máquina, na porta `3000`.

- **`2015-03-31`**: Essa parte da URL se refere à versão da API da AWS Lambda. É um padrão usado para garantir que a chamada da função seja compatível com a versão da API.

- **`functions/getAgendas`**: Isso se refere à função Lambda chamada `getAgendas`. É assim que o Serverless organiza as funções.

- **`invocations`**: Esta parte indica que você está invocando (ou chamando) a função Lambda.

### O Que Fazer com Isso

Quando você usa `serverless-offline`, o plugin cria um ambiente simulado para as funções Lambda e suas APIs. Isso permite que você teste suas funções localmente sem precisar implantá-las na AWS. A URL que você mencionou é como você faria uma chamada para sua função `getAgendas`.

### Testando a Função

Para testar a função `getAgendas`, você pode usar ferramentas como Postman, Insomnia, ou mesmo o `curl` no terminal:

```bash
curl -X POST http://localhost:3000/2015-03-31/functions/getAgendas/invocations
```

### Considerações

- Certifique-se de que o servidor `serverless-offline` está em execução. Se não estiver, você precisará iniciá-lo com o comando:

```bash
serverless offline
```

- Esse tipo de endpoint é gerado automaticamente e não precisa ser modificado. Ele é útil apenas para fins de teste local.
  

##  O **Serverless Framework** por padrão define o estágio como `dev` se nenhum estágio específico for configurado. 
Para forçar a ausência do prefixo no ambiente local, uma abordagem eficaz é definir o estágio explicitamente no momento de execução ou configurar um nome customizado.

Aqui estão algumas opções:

### 1. Executar com um Estágio Vazio no Comando de Inicialização

Ao executar `serverless offline`, você pode especificar o estágio diretamente no comando para sobrescrever o valor padrão `dev`. No terminal, execute:

```bash
npx serverless offline --stage ""
```

Isso indica explicitamente ao Serverless Framework para usar um estágio vazio, removendo o prefixo `/dev` das rotas.

### 2. Definir Estágio Customizado para Desenvolvimento Local

Outra abordagem é criar um estágio customizado específico para o ambiente local, como `offline`, e configurá-lo para não adicionar o prefixo. No `serverless.yml`:

```yaml
service: agenda-medica

frameworkVersion: ">=4.0.0"

provider:
  name: aws
  runtime: nodejs14.x
  region: us-east-1
  stage: offline  # Defina o estágio para 'offline' ou outro nome customizado

plugins:
  - serverless-offline

custom:
  serverless-offline:
    noPrependStageInUrl: true  # Evita o prefixo do estágio nas rotas
    port: 3000                 # Define a porta

functions:
  getAgendas:
    handler: src/agenda/controller.getAgendas
    events:
      - http:
          path: agendas
          method: get

  createAgendamento:
    handler: src/agendamento/controller.createAgendamento
    events:
      - http:
          path: agendamento
          method: post
```

### 3. Forçar o `noStage` para Rotas de Desenvolvimento

Algumas versões do `serverless-offline` possuem a configuração `noPrependStageInUrl`, que ajuda a remover o prefixo de estágio nas rotas:

```yaml
custom:
  serverless-offline:
    noPrependStageInUrl: true
```

### Resultado

Essas configurações devem garantir que você possa acessar suas rotas no formato:

- `http://localhost:3000/agendas`
- `http://localhost:3000/agendamento`

Nota
Essas configurações são específicas para o ambiente de desenvolvimento local. Quando você fizer o deploy na AWS, o estágio será importante para organizar suas rotas e separá-las por ambiente (desenvolvimento, produção, etc.). Assim, evite usar uma string vazia em produção para evitar conflitos.


## Testes

Para rodar os testes, utilize o seguinte comando:

```bash
npm run test
```

## Melhorias

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
