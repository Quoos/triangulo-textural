// Função chamada ao clicar no botão "Enviar"
function Confere() {
  // Captura os valores dos campos de entrada e converte para inteiro
  let argila = parseInt(document.getElementById("valorargila").value);
  let silte = parseInt(document.getElementById("valorsilte").value);
  let areia = parseInt(document.getElementById("valorareia").value);

  // Soma total dos componentes
  let total = argila + silte + areia;

  // Referências aos elementos principais
  let divTriangulo = document.getElementById("divTRIANGULO");
  let divTudo = document.getElementById("divTUDO");

  // Verifica se a soma é válida (precisa ser exatamente 100)
  if (isNaN(total) || total !== 100) {
    divTriangulo.style.display = "block"; // Mostra triângulo base
    divTudo.style.display = "none";       // Oculta imagens de classificação
    document.getElementById("valortotal").innerHTML = "Erro, total: " + total;
  } else {
    divTriangulo.style.display = "none";
    divTudo.style.display = "block";
    Triangulo(); // Chama função de verificação
    document.getElementById("valortotal").innerHTML = "ok";
  }
}

// Função que exibe imagem conforme combinação dos valores
function Triangulo() {
  let argila = parseInt(document.getElementById("valorargila").value);
  let silte = parseInt(document.getElementById("valorsilte").value);
  let areia = parseInt(document.getElementById("valorareia").value);

  // Função utilitária para mostrar ou ocultar divs
  let exibir = (id, condicao) => {
    document.getElementById(id).style.display = condicao ? "block" : "none";
  };

  // Lógica de classificação textural com base nos percentuais
  exibir("divARGILA", argila > 40 && argila < 60 && silte < 40 && areia < 45);
  exibir("divMUITOARGILOSA", argila >= 60 && silte < 40 && areia < 40);
  exibir("divARGILOSILTOSA", argila >= 40 && silte >= 40);
  exibir("divARGILOARENOSA", argila > 35 && areia >= 45);
  exibir("divFRANCOARGILOSA", argila > 27 && argila < 40 && areia > 20 && areia < 45);
  exibir("divFRANCOARGILOARENOSA", argila >= 20 && argila <= 35 && silte <= 28 && areia >= 45);
  exibir("divFRANCOARGILOSILTOSA", argila >= 27 && argila <= 40 && areia <= 20);
  exibir("divFRANCOSILTOSA", argila >= 12 && argila < 27 && silte >= 50);
  exibir("divFRANCOSILTOSA2", argila <= 12 && silte >= 50 && silte <= 80);
  exibir("divSILTE", argila < 12 && silte > 80);
  exibir("divFRANCA", argila >= 7 && argila <= 27 && silte >= 28 && silte < 50 && areia < 52);
  exibir("divFRANCOARENOSO", argila < 7 && silte < 50 && areia < 52 && areia > 43);
  exibir("divFRANCOARENOSO2", argila < 20 && areia >= 52 && silte + 2 * argila > 30);
  exibir("divAREIAFRANCA", silte + 2 * argila <= 30 && areia >= 70 && areia < 85);
  exibir("divAREIAFRANCA2", silte + 1.5 * argila > 15 && areia >= 85 && areia <= 90);
  exibir("divAREIA", (silte + 1.5 * argila) <= 15 && areia >= 85);
}