

let lancheSelecionado = "";
let bebidaSelecionada = "";
let sobremesaSelecionada = "";
let todosItensSelecionados = false; 
let ativaBotao = false;
let nomeDoLanche = "";
let nomeDaBebida = "";
let nomeDaSobremesa = "";
let valorDoLanche = 0;
let valorDaBebida = 0;
let valorDaSobremesa = 0;
let valorTotal = 0;



function selecionarLanche(item) {
  const botaoSelecionadoAntes = document.querySelector(".area-dos-lanches .selecionado");

  if (botaoSelecionadoAntes !== null) { 
      botaoSelecionadoAntes.classList.remove("selecionado"); 
      botaoSelecionadoAntes.querySelector(".check").classList.add("visibilidade"); 
  }

  item.classList.add("selecionado"); 
 
  const removerAntes = item.querySelector(".visibilidade");
  const remover = item.querySelector(".check");

  if (removerAntes !== null) {
      removerAntes.classList.add("visibilidade"); 
  }

  remover.classList.remove("visibilidade"); 

   lancheSelecionado =  item.querySelector(".selecionado");
   
   
   verificarTodosItensSelecionados();

   const nomelanc = item.querySelector(".nome-do-alimento");
   nomeDoLanche = nomelanc.innerHTML;

   const preco = item.querySelector(".preco-do-alimento");
   //valorDoLanche = parseFloat(preco.textContent.replace("R$ ", ""));
   valorDoLanche = preco.innerHTML;
   console.log(valorDoLanche);
  }

  
function selecionarBebida(item) {
    const botaoSelecionadoAntes = document.querySelector(".area-das-bebidas .selecionado");
  
    if (botaoSelecionadoAntes !== null) { 
        botaoSelecionadoAntes.classList.remove("selecionado"); 
        botaoSelecionadoAntes.querySelector(".check").classList.add("visibilidade"); 
    }
  
    item.classList.add("selecionado");
  
    const removerAntes = item.querySelector(".visibilidade");
    const remover = item.querySelector(".check");
  
    if (removerAntes !== null) {
        removerAntes.classList.add("visibilidade"); 
    }
  
    remover.classList.remove("visibilidade"); 

     bebidaSelecionada =  item.querySelector(".selecionado");
    
     verificarTodosItensSelecionados();

    const nomebeb = item.querySelector(".nome-do-alimento");
    nomeDaBebida = nomebeb.innerHTML;

    const preco = item.querySelector(".preco-do-alimento");
   
    valorDaBebida = preco.innerHTML;
    console.log(valorDaBebida);
  }


function selecionarSobremesa(item) {
    const botaoSelecionadoAntes = document.querySelector(".area-das-sobremesas .selecionado");
  
    if (botaoSelecionadoAntes !== null) { 
        botaoSelecionadoAntes.classList.remove("selecionado"); 
        botaoSelecionadoAntes.querySelector(".check").classList.add("visibilidade"); 
    }
  
    item.classList.add("selecionado");
  
    const removerAntes = item.querySelector(".visibilidade");
    const remover = item.querySelector(".check");
  
    if (removerAntes !== null) { 
        removerAntes.classList.add("visibilidade");
    }
  
    remover.classList.remove("visibilidade"); 
    
    sobremesaSelecionada =  item.querySelector(".selecionado");
  

    verificarTodosItensSelecionados();

    const nomesob = item.querySelector(".nome-do-alimento");
    nomeDaSobremesa = nomesob.innerHTML;

    const preco = item.querySelector(".preco-do-alimento");
    
    valorDaSobremesa = preco.innerHTML;
    console.log(valorDaSobremesa);
  }

    
function verificarTodosItensSelecionados() {

  if (lancheSelecionado == null && bebidaSelecionada == null && sobremesaSelecionada == null) {
      let botaoAtivado = document.querySelector(".botao-selecionar");
      botaoAtivado.classList.add("botao-estilo");
      botaoAtivado.innerHTML = "Fechar pedido"
      ativaBotao = true;
  } else {
      
      let botaoDesativado = document.querySelector(".botao-selecionar");
      botaoDesativado.classList.remove("botao-estilo");
  }
}

function botaoSelecionarFinal() {
  if (ativaBotao) {
    const mensagemFinal = document.querySelector(".msn-final");
    mensagemFinal.classList.remove("visibilidade");
        
    pegaEImprimeNomePreco();    

    converteECalculaValor();
     
    const valorTotalImprime = document.querySelector(".preco-total");
    valorTotalImprime.innerHTML = "R$ " + valorTotal.toFixed(2); 
  }
}

function converteECalculaValor(){

  const valorLancheConvertido = parseFloat(valorDoLanche.replace("R$ ", "").replace(",", "."));
    const valorBebidaConvertido = parseFloat(valorDaBebida.replace("R$ ", "").replace(",", "."));
    const valorSobremesaConvertido = parseFloat(valorDaSobremesa.replace("R$ ", "").replace(",", "."));

    valorTotal = valorLancheConvertido + valorBebidaConvertido + valorSobremesaConvertido;


}

function pegaEImprimeNomePreco(){


  const nomeLanche = document.querySelector(".texto-nome-lanche");
  nomeLanche.innerHTML = nomeDoLanche;
  
  const nomeBebida = document.querySelector(".texto-nome-bebida");
  nomeBebida.innerHTML = nomeDaBebida;
  
  const nomeSobremesa = document.querySelector(".texto-nome-sobremesa");
  nomeSobremesa.innerHTML = nomeDaSobremesa;

  const precoLanche = document.querySelector(".preco-lanche");
  precoLanche.innerHTML = valorDoLanche;

  const precoBebida = document.querySelector(".preco-bebida");
  precoBebida.innerHTML = valorDaBebida;
  
  const precoSobremesa = document.querySelector(".preco-sobremesa");
  precoSobremesa.innerHTML = valorDaSobremesa;

  const valorTotalImprime = document.querySelector(".preco-total");
  valorTotalImprime.innerHTML = "R$ " + valorTotal.toFixed(2);
}

function botaoCancelarPedido(){
  const mensagemFinal = document.querySelector(".msn-final");
  mensagemFinal.classList.add("visibilidade");
}


const botaoConfirmarPedido = document.querySelector(".botao-confirmar-pedido");

botaoConfirmarPedido.addEventListener("click", function() {
  
    let precoTotal = "R$ " + valorTotal.toFixed(2);


    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeDoLanche} \n- Bebida: ${nomeDaBebida} \n- Sobremesa: ${nomeDaSobremesa} \n- Total: ${precoTotal}`;

   
    let enderecoDoSite = `https://wa.me/5565999725707?text=${encodeURIComponent(mensagem)}`;
    
    window.location.href = enderecoDoSite;
});
