 /// <reference types="cypress" />

 describe("Testing shopist web",()=>{
    before(()=>{
        
        cy.visit("https://shopist.io/")
    })
    it("chlick on chairs nav",()=>{
        cy.get('.hamburger').click()
        cy.get('.chairs').click({force:true})
        cy.url().should("include","/department/chairs")
        cy.get(':nth-child(1) > :nth-child(1) > a > .product-card > img').click()
        cy.get(".purchase-button").click()
        cy.get(".cart").should("contain.text",1)
    })
 })