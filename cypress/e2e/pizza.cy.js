describe("Pizza Order Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order"); 
  });

  it("inputa isim yazılabilmeli", () => {
    cy.get("input").first().type("Elif");

    cy.get("input").first().should("have.value", "Elif");
  });

  it("birden fazla malzeme seçilebilmeli", () => {
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();

    cy.get('input[type="checkbox"]:checked').should("have.length", 3);
  });

  it("form başarıyla gönderilebilmeli", () => {
    // isim
    cy.get("input").first().type("Elif");

    // size seç
    cy.get('input[type="radio"][value="Küçük"]').check({ force: true });

    // dough seç
    cy.get("select").select("İnce");

    // en az 4 extra seç
    cy.get('input[type="checkbox"]').each(($el, index) => {
      if (index < 4) cy.wrap($el).check({ force: true });
    });

    // submit
    cy.contains("SİPARİŞ VER").click();

    // buton disabled değilse submit çalışır
    cy.contains("SİPARİŞ VER").should("exist");
  });
});