# Validador de CPF v.1.0.0

**Esta biblioteca se destina à validar números de CPF, para certificar a existência do mesmo.**
Na versão atual é capaz de validar números de CPF para certificar a existência do mesmo, podendo ser digitado em formato de string ou number.

## Como instalar:

```shell

$  npm install valid-cpf-lib-amanda-gomes

```

## Como utilizar:

```node

> const valid = require("valid-cpf-lib-amanda-gomes");

> valid.cpfValidator("62751736025");
> // returns true

> valid.cpfValidator('366.714.620-54');
> // returns true

> valid.cpfValidator(10101010101);
> // returns false

```

## Roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidade: validar números de CPF para certificar a existência do mesmo.
- formato da entrada de dados (argumento)/input: string (incluindo ou não, pontos e traços) ou number.
- formato da saída de dados (retorno)/output: true (CPF válido) e false (CPF inválido).