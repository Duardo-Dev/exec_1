// Declara as variaveis, em escopo global, para q todas as funcoes acessem.
let nomedados = document.getElementById('nome')
let valordados = document.getElementById('valor')
let quantidadedados = document.getElementById('quantidade')
let imagemdados = document.getElementById('imagem')
// criar um array
let a = []
// cria uma variavel id.
id = 0;

// funçao criada para validar os inputs
function validar(){
    // ele verifica se tem algo esctito no input
    if (nome.value.length !== 0) {
        nome.classList.remove('is-invalid');
        // se tiver ele colocar uma validacao no input
        nome.classList.add('is-valid');
        // se nao
    } else {
        // ele remove essa validacao e coloca um invalid
        nome.classList.remove('is-valid');
        nome.classList.add('is-invalid');
    }

}

// funcao de cadastrar
function cadastrar(){
    
    let table = document.getElementsByClassName('text-area')
    // alert(`o valor digitado foi ${nome.value}`)
    event.preventDefault();
   
    // criar um objeto dentro do array, e empurra as infos dos inputs
    a.push({
        id: id,
        nome: nomedados.value,
        valor: valordados.value,
        quantidade: quantidadedados.value,
        imagem: imagemdados.value,
    })
    // a cada push o id aumenta
    id++;
    // funcao para aparece a table
    renderProdutos();
}
// essa funcao pode ser criada, dps da de cadastrar, pois so esta sendo chamada dentro de outra funcao, a cadastrar().
function renderProdutos(){
    // limpa a tabela, para nao tem valores duplicados dentro da table
    document.getElementById("ab").innerHTML = ``;
    // essa funcao, ela vai criar outro array, com cada objeto de dentro da table
    a.map((item)=>{
// e agora ela vai mostrar isso na tela com o inneHTML
        document.getElementById("ab").innerHTML += `

<tr id="linha-${item.id}">
            
           <td>${item.id}</td>
          <td>${item.nome}</td>
          <td>${item.valor}</td>
          <td>${item.quantidade}</td>
          <td><img style=width:100px; height:100px; src='${item.imagem}'></td>
                 <td>
                  <button  onclick ="editProduto(${item.id})" class="btn btn-warning">Editar</button>
                  <button  onclick ="excluirProduto(${item.id})" class="btn btn-danger">Excluir</button>
              </td>
      
        </tr>
      `;


    })

}


function editProduto(id) {
    
    a = a.map((item) => {
        if(item.id === id) {
            return {
                id: id,
                nome: nomedados.value,
                valor: valordados.value,	
                quantidade: quantidadedados.value,
                img: imagemdados.value,
            };
        }
     
        return item;
    });
    console.log(a)
   
   renderProdutos();
}


function excluirProduto(id) {

    a = a.filter((item) => item.id === id) ;

    const linha = document.getElementById(`linha-${id}`);
    if (linha) {
        linha.remove(); 
    }   
}
