Utilize um sistema de tipagem estática e um linter para detectar erros básicos, como erros de digitação e de sintaxe.

Escreva testes unitários eficazes que visem o comportamento e a funcionalidade críticos da sua aplicação.

Desenvolva testes de integração para auditar sua aplicação de forma holística e garantir que tudo funcione corretamente em harmonia.

Crie testes funcionais de ponta a ponta (e2e) para testes automatizados de cliques em caminhos críticos, em vez de depender dos seus usuários para fazer isso.

Testes funcionais de ponta a ponta (E2E - End-to-End) simulam o fluxo completo de um usuário real em um sistema, validando desde a interface (front-end) até o banco de dados e integrações externas, garantindo que todos os componentes funcionem juntos de forma integrada e correta, do início ao fim, como em um cenário de produção


e2e - mais lentos
integrations  - mais ou menos
unit - mais rapidos porque pegam somente pequenos trechos do codigo como por exemplo funções


jest dom - cria um dom virtual para o teste
library/react- somente escolhendo o framework
user-event- para mapear testes do usuario,por exemplo clique, form ...
vitest/coverage-v8 - serve para testar a cobertura de teste do projeto
vitest- o proprio framework de teste
path- para mover pelos camnihos dos testes


mockados exemplo

vi.mock("reat-router-dom",() =>({
  useNavigate(){
    return vi.fn()
  }
}))

TDD - você escreve os teste antes de escrever propriamente dito o codigo

testes de integração - intercepetando, cliacnado botoes, vendo se tem um conteudo dentro de uma pagina, quando eu navego de uma tela para a outra.

por exemplo no pokemon details, quando renderizo uma pagina e vejo se tem os dados dentro dela, basicamente está sendo escrito o teste unitarios
