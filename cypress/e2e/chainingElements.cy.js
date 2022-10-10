 /// <reference types="cypress" />

 describe("Chaining elements",()=>{

    beforeEach(()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
    })
    it('interaction with elements',()=>{
        cy.get("#userForm").find("#userName-wrapper").next()
        cy.get("#userForm").find("div").first()
        cy.get("#userForm").find("div").last()
        cy.get("#userForm").find("#userName-label").parent()
        cy.get("#userForm").find("#userName-wrapper").children()
    })
})