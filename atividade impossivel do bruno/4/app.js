// Classe Funcionario
class Funcionario {
    constructor(nome, salario, departamento) {
      this.nome = nome;
      this.salario = salario;
      this.departamento = departamento;
    }
  }
  
  // Lista de funcionários
  const funcionarios = [];
  
  // Referências dos elementos HTML
  const form = document.querySelector('form');
  const nomeInput = document.querySelector('#nome');
  const salarioInput = document.querySelector('#salario');
  const departamentoInput = document.querySelector('#departamento');
  const tabelaCorpo = document.querySelector('#tabela-corpo');
  const adicionarBotao = document.querySelector('#adicionar');
  
  function adicionarFuncionario() {
    const novoFuncionario = new Funcionario(
      nomeInput.value,
      salarioInput.value,
      departamentoInput.value
    );
  
    funcionarios.push(novoFuncionario);
  
    nomeInput.value = '';
    salarioInput.value = '';
    departamentoInput.value = '';
  
    atualizarTabela();
  }
  
  function atualizarTabela() {
    tabelaCorpo.innerHTML = '';
  
    for (const funcionario of funcionarios) {
      const novaLinha = `
        <tr>
          <td>${funcionario.nome}</td>
          <td>${funcionario.salario}</td>
          <td>${funcionario.departamento}</td>
        </tr>
      `;
      tabelaCorpo.innerHTML += novaLinha;
    }
  }
  
  adicionarBotao.addEventListener('click', adicionarFuncionario);
  