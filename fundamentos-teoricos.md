# 🧪 Anotações sobre Testes Automatizados

## 🧱 Boas práticas iniciais

- Utilize um sistema de **tipagem estática** e um **linter** para detectar erros básicos:
  - Erros de digitação
  - Erros de sintaxe

---

## 🧪 Tipos de testes

### Testes Unitários
- São os **mais rápidos**
- Testam **pequenos trechos do código**
- Exemplo:
  - Funções isoladas

---

### Testes de Integração
- Velocidade **intermediária**
- Envolvem:
  - Interceptar ações
  - Clicar em botões
  - Verificar se existe conteúdo dentro de uma página
  - Navegar de uma tela para outra

**Exemplo:**
- No *Pokemon Details*:
  - Renderizo a página
  - Verifico se os dados estão sendo exibidos

> Apesar de parecer teste unitário, isso é **teste de integração**.

---

### Testes End-to-End (E2E)
- São os **mais lentos**
- Testam o fluxo completo do usuário
- Validam a aplicação do início ao fim
- Evitam depender dos usuários para encontrar erros

---

## 🔁 Comparação de desempenho

- **Unit** → mais rápidos  
- **Integration** → velocidade intermediária  
- **E2E** → mais lentos  

---

## 🔁 TDD — Test Driven Development

- Você escreve os **testes antes** de escrever o código
- O código é desenvolvido para fazer o teste passar

---

## 🧰 Ferramentas de Testes

- **jest-dom**  
  Cria um DOM virtual para o teste.

- **@testing-library/react**  
  Biblioteca usada apenas para escolher o framework e testar componentes React.

- **@testing-library/user-event**  
  Usada para mapear ações do usuário, como:
  - Cliques
  - Formulários
  - Interações na interface

- **vitest**  
  Framework de testes.

- **vitest/coverage-v8**  
  Serve para testar a **cobertura de testes** do projeto.

- **path**  
  Usado para navegar pelos caminhos dos arquivos de teste.

---

## 🎭 Mock (exemplo anotado)

```ts
vi.mock("react-router-dom", () => ({
  useNavigate() {
    return vi.fn()
  }
}))
