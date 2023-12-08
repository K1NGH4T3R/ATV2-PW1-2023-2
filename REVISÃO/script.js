function adicionarDados() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;

    if (nome !== '' && idade !== '') {
        var tabela = document.getElementById('tabela-corpo');
        var novaLinha = tabela.insertRow(tabela.rows.length);

        var celulaNome = novaLinha.insertCell(0);
        var celulaIdade = novaLinha.insertCell(1);

        celulaNome.innerHTML = nome;
        celulaIdade.innerHTML = idade;

        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}