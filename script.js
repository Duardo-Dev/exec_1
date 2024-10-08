// Declara as variaveis, em escopo global, para q todas as funcoes acessem.
let nomedados = document.getElementById('nome')
let valordados = document.getElementById('valor')
let quantidadedados = document.getElementById('quantidade')
let imagemdados = document.getElementById('imagem')
// cria uma novo array
let a = []
id = 0;
// cria uma função para validar os inputs
function validar(){
    // verifica se o input está vazio
    if (nome.value.length !== 0) {
        // e se tiver, ele colocar uma borda verde
        nome.classList.remove('is-invalid');
        nome.classList.add('is-valid');
        // se não, ele coloca uma borda vermelha
    } else {
        nome.classList.remove('is-valid');
        nome.classList.add('is-invalid');
    }

}


function cadastrar(){
    let table = document.getElementsByClassName('text-area')
    // alert(`o valor digitado foi ${nome.value}`)
    event.preventDefault();
   
    
    a.push({
        id: id,
        nome: nomedados.value,
        valor: valordados.value,
        quantidade: quantidadedados.value,
        imagem: imagemdados.value,
    })
    
    id++;
    renderProdutos();
}

function renderProdutos(){
    document.getElementById("ab").innerHTML = ``;
   
    a.map((item)=>{

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



