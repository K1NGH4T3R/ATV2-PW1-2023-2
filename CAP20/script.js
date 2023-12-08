var tabela = document.getElementById('minhaTabela');
var linhas = tabela.getElementsByTagName('tr');

for (var i = 0; i < linhas.length; i++) {
    var colunas = linhas[i].getElementsByTagName('td');
    if (colunas.length > 0) {
        linhas[i].deleteCell(-1); 
    }
}


var novaLinha = tabela.insertRow(-1); 

for (var i = 0; i < 3; i++) {
    var novaCelula = novaLinha.insertCell(i); 
    novaCelula.textContent = 'Novo ' + ((i+1) * 3);
}