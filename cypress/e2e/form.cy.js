 /// <reference types="cypress" />

describe('Support test form',()=>{
    it('Test input fiels of forms with submit button',()=>{
        cy.visit('https://practice.automationbro.com/support-form/')

        //Text inputs
        cy.get('#evf-680-field_lVizlNhYus-1').type("Testing")
        cy.get('#evf-680-field_XYnMdkQDKM-3').type("Testing.123@gmail.com")
        cy.get('#evf-680-field_xJivsqAS2c-2').type('doing testing')
        
        //Dropdown
        cy.get('#evf-680-field_82kaAPhrnW-6').select("Technical Team")

        //Checkbox
        cy.get('#evf-680-field_sOAJfxP1Lf-7-container input').check([
            "Integration Issue",
            "Software Issue"
        ])
    
        //Date Picker
        cy.get('#evf-680-field_s1KysSbUW6-8').click()
        cy.get('.dayContainer span:nth-child(5)').click()

        //Text Area
        cy.get('#evf-680-field_YalaPcQ0DO-4').type('Í am testing here')

        //Submit Button
        cy.get('#evf-submit-680').click()

        //Success Message
        cy.get('.everest-forms-notice').should("contain.text","Thanks for contacting us! We will be in touch with you shortly.")
    })
})