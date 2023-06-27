
let palavrasSrtCtg;
let palavraSecretaAleatoria;
let listdnmc = [];
let acertos = 6;
const palavras = [
    palavra001 = {
        nome: "HISTORIA",
        categoria: "CONHECIMENTO"
    },
    palavra002 = {
        nome: "CIENCIA",
        categoria: "CONHECIMENTO"
    },
    palavra003 = {
        nome: "POLITICA",
        categoria: "CONHECIMENTO"
    },
    palavra004 = {
        nome: "ARTE",
        categoria: "CONHECIMENTO"
    },
    palavra005 = {
        nome: "TECNOLOGIA",
        categoria: "CONHECIMENTO"
    },
    palavra006 = {
        nome: "ONTEM",
        categoria: "TEMPO"
    },
    palavra007 = {
        nome: "AMANHA",
        categoria: "TEMPO"
    },
    palavra008 = {
        nome: "FUTURO",
        categoria: "TEMPO"
    },
    palavra009 = {
        nome: "ANTIGAMENTE",
        categoria: "TEMPO"
    },
    palavra010 = {
        nome: "AGORA",
        categoria: "TEMPO"
    },
    palavra011 = {
        nome: "TEMPESTADE",
        categoria: "FENOMENOS DA NATUREZA"
    },
    palavra012 = {
        nome: "CHUVA",
        categoria: "FENOMENOS DA NATUREZA"
    },
    palavra013 = {
        nome: "VENTANIA",
        categoria: "FENOMENOS DA NATUREZA"
    },
    palavra014 = {
        nome: "NEVE",
        categoria: "FENOMENOS DA NATUREZA"
    },
    palavra015 = {
        nome: "TROVAO",
        categoria: "FENOMENOS DA NATUREZA"
    },
    palavra016 = {
        nome: "ESCOLA",
        categoria: "ENSINO"
    },
    palavra017 = {
        nome: "UNIVERSIDADE",
        categoria: "ENSINO"
    },
    palavra018 = {
        nome: "PROFESSOR",
        categoria: "ENSINO"
    },
    palavra019 = {
        nome: "ALUNO",
        categoria: "ENSINO"
    },
    palavra020 = {
        nome: "EDUCACAO",
        categoria: "ENSINO"
    },
    palavra021 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra022 = {
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavra023 = {
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra024 = {
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavra025 = {
        nome: "MOTO",
        categoria: "TRANSPORTE"
    },
    palavra026 = {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra027 = {
        nome: "URUTAU",
        categoria: "ANIMAIS"
    },
    palavra028 = {
        nome: "PARDAL",
        categoria: "ANIMAIS"
    },
    palavra029 = {
        nome: "COBRA",
        categoria: "ANIMAIS"
    },
    palavra030 = {
        nome: "AVE",
        categoria: "ANIMAIS"
    },
    palavra031 = {
        nome: "CAMPO",
        categoria: "GEOGRAFIA"
    },
    palavra032 = {
        nome: "PRAIA",
        categoria: "GEOGRAFIA"
    },
    palavra033 = {
        nome: "CIDADE",
        categoria: "GEOGRAFIA"
    },
    palavra034 = {
        nome: "MONTANHA",
        categoria: "GEOGRAFIA"
    },
    palavra035 = {
        nome: "FLORESTA",
        categoria: "GEOGRAFIA"
    },
    palavra036 = {
        nome: "SHAMPOO",
        categoria: "HIGIENE"
    },
    palavra037 = {
        nome: "SABONETE",
        categoria: "HIGIENE"
    },
    palavra038 = {
        nome: "COTONETE",
        categoria: "HIGIENE"
    },
    palavra039 = {
        nome: "PERFUME",
        categoria: "HIGIENE"
    },
    palavra040 = {
        nome: "ESCOVA",
        categoria: "HIGIENE"
    },
    palavra041 = {
        nome: "ESPACO",
        categoria: "ASTRONOMIA"
    },
    palavra042 = {
        nome: "NEBULOSA",
        categoria: "ASTRONOMIA"
    },
    palavra043 = {
        nome: "HUBBLE",
        categoria: "ASTRONOMIA"
    },
    palavra044 = {
        nome: "PLANETA",
        categoria: "ASTRONOMIA"
    },
    palavra045 = {
        nome: "ANDROMEDA",
        categoria: "ASTRONOMIA"
    },
    palavra046 = {
        nome: "CIRURGIA",
        categoria: "MEDICINA"
    },
    palavra047 = {
        nome: "TRATAMENTO",
        categoria: "MEDICINA"
    },
    palavra048 = {
        nome: "MEDICAMENTO",
        categoria: "MEDICINA"
    },
    palavra049 = {
        nome: "SAUDE",
        categoria: "MEDICINA"
    },
    palavra050 = {
        nome: "DOENCA",
        categoria: "MEDICINA"
    },
    palavra051 = {
        nome: "RUINAS",
        categoria: "ARQUEOLOGIA"
    },
    palavra052 = {
        nome: "ARTEFATOS",
        categoria: "ARQUEOLOGIA"
    },
    palavra053 = {
        nome: "ESCAVACAO",
        categoria: "ARQUEOLOGIA"
    },
    palavra054 = {
        nome: "ANTROPOLOGIA",
        categoria: "ARQUEOLOGIA"
    },
    palavra055 = {
        nome: "CIVILIZACAO",
        categoria: "ARQUEOLOGIA"
    },
    palavra056 = {
        nome: "LESOTO",
        categoria: "PAISES"
    },
    palavra057 = {
        nome: "VANUATU",
        categoria: "PAISES"
    },
    palavra058 = {
        nome: "TADJIQUISTAO",
        categoria: "PAISES"
    },
    palavra059 = {
        nome: "BRASIL",
        categoria: "PAISES"
    },
    palavra060 = {
        nome: "ANGOLA",
        categoria: "PAISES"
    },
    palavra056 = {
        nome: "PALEONTOLOGIA",
        categoria: "FOSSIL"
    },
    palavra057 = {
        nome: "PEGADAS",
        categoria: "FOSSIL"
    },
    palavra058 = {
        nome: "EVOLUCAO",
        categoria: "FOSSIL"
    },
    palavra059 = {
        nome: "AMBAR",
        categoria: "FOSSIL"
    },
    palavra060 = {
        nome: "DINOSSAURO",
        categoria: "FOSSIL"
    }
];
criaPlvrScrt();
function criaPlvrScrt() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaAleatoria = palavras[indexPalavra].nome;
    palavrasSrtCtg = palavras[indexPalavra].categoria;

}

PalavraNaTela();

function PalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = "TEMA: " + palavrasSrtCtg;


    categoria.style.color = "rgb(0, 0, 0)";
    categoria.innerHTML = "TEMA: " + palavrasSrtCtg;


    const Palavrasecreta = document.getElementById("Palavra-secreta");
    Palavrasecreta.innerHTML = "";

    for (i = 0; i < palavraSecretaAleatoria.length; i++) {
        if (listdnmc[i] == undefined) {
            if(palavraSecretaAleatoria[i] == " ") {
            listdnmc[i] = " ";

            Palavrasecreta.innerHTML = Palavrasecreta.innerHTML + "<div class='letrasEspaco'>" + listdnmc[i] + "</div>"
            }

            else {
            listdnmc[i] = "&nbsp;"
            Palavrasecreta.innerHTML = Palavrasecreta.innerHTML + "<div class='letras'>" + listdnmc[i] + "</div>"
            }
        }
        else {
            if(palavraSecretaAleatoria[i] == " ") {
                listdnmc[i] == " ";
                Palavrasecreta.innerHTML = Palavrasecreta.innerHTML + "<div class='letrasEspaco'>" +
                listdnmc[i] + "</div>"
            }
            else{
                Palavrasecreta.innerHTML = Palavrasecreta.innerHTML + "<div class='letras'>" + listdnmc[i] + "</div>"
            }
        }
    }
}
function LetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (acertos > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        PalavraNaTela();
    }
}
function mudarStyleLetra(tecla, condicao) {
   if(condicao == false) {

    document.getElementById(tecla).style.background = "#474747d2";
    document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}
function comparaListas(letra) {
    const pos = palavraSecretaAleatoria.indexOf(letra);
    if (pos < 0) {
        acertos--;
        carregaImagemErro();

        if (acertos == 0) {
            abreModal("OPS!", "Não foi desta vez :( ... A palavra secreta era: <br>" + palavraSecretaAleatoria);
        }
    }
    else {
        for (i = 0;i < palavraSecretaAleatoria.length; i++) {
            if (palavraSecretaAleatoria[i] == letra) {
                listdnmc[i] = letra;
            }
        }
    }

    var vitoria = true;
    for (i = 0; i < palavraSecretaAleatoria.length; i++) {
        if (palavraSecretaAleatoria[i] != listdnmc[i]) {
        vitoria = false;
        }
    }
    if (vitoria == true) {
    abreModal("Boa!", "Você acertou :)");
    acertos = 0;

    }
}
function carregaImagemErro() {
    switch (acertos) {
        case 5:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem1.png') 100% no-repeat";
            break;
        case 4:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem2.png') 100% no-repeat";
            break;
        case 3:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem3.png') 100% no-repeat";
            break;
        case 2:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem4.png') 100% no-repeat";
            break;
        case 1:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem5.png') 100% no-repeat";
            break;
        case 0:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem6.png') 100% no-repeat";
            break;
        default:
            document.getElementById("imgForca").style.background = "url('../imagem/Imagem.png') 100% no-repeat";
    }
}
function abreModal(titulo, mensagem) {

    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({ show: true });
}
let btnEnter = document.querySelector("#BtnEnter");

btnEnter.addEventListener("click",function(){

    location.reload();
});