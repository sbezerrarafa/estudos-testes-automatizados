describe("Testa a página de detalhes do pokemon", () => {
  it("Deve renderizar um pokemon na nossa tela", () => {
    cy.visit("/pokemon-detail/1");

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Pikachu");
    cy.get("img").should(
      "have.attr",
      "src",
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    );//aqui voce pode detalhar o elemento, vendo o atributos dentro de uma tag por exemplo

    cy.get("div")
      .find("div")//aqui tá pegando todas as divs da pagina
      .should(($div) => {//passando div como parametro
        expect($div).to.have.length(2);

        const className = $div[0].className;
        expect(className).to.match(/container/);//o / vem de expressao regular
      })
      .then(($div) => {
        expect($div).to.have.css("display", "flex");//verificando o css das tags
      });
  });
});
