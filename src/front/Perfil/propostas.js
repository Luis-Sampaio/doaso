//PROPOSTAS DE DOAÇÃO
// import PropostaHelper from "../script/Proposta.js";

// var btn = document.getElementById('btnCadastrarProposta');

// function obterDataAtual() {
//     const data = new Date();
//     const ano = data.getFullYear();
//     const mes = String(data.getMonth() + 1).padStart(2, '0');
//     const dia = String(data.getDate()).padStart(2, '0');
//     return `${ano}-${mes}-${dia}`;
//   }

// function cadastrarProposta(){

//     // categoria = document.getElementById('categoria').value;
//     desc = document.getElementById('descricaoProposta').value;
//     // idUsuario = getUsuarioLogado();

//     let body ={
//         descricao: desc,
//         data: obterDataAtual(),
//         idUsuario: 1,
//         idCentro: 2,
//     }   

//     PropostaHelper.postProposta(body)
// }

// btn.addEventListener('click', cadastrarProposta);

import { postImgAPI } from '../script/API_img.js';


document.getElementById('btnCadastrarProposta').addEventListener('click', async (event) => {
        event.preventDefault();
    
        try {
            postImgAPI('imagemProposta')
        .then(url => console.log("Imagem carregada em:", url))
        .catch(error => console.error("Erro:", error));
    
        } catch (error) {
            console.error('Erro:', error);
        }
    });
