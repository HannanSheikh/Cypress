

describe("Tset Login Functionality",()=>{

    it("Go to URL",()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
    })

    it('Yield method',()=>{
        cy.get('[id="btn-make-appointment"]').then(btn=>{
            expect(btn.text()).eq("Make Appointment")
        })
    })
    it('Wrap method',()=>{
        //we calso do this by wrap funtion
        cy.get('[id="btn-make-appointment"]').then(btn=>{
            cy.wrap(btn).should("contain","Make Appointment")
        })
    })
    it('Invoke method',()=>{
        //we calso do this by invoke. invoke can be helpfull for element attributes as well.
        cy.get('[id="btn-make-appointment"]').invoke("text").then(btn=>{
            expect(btn).to.eq("Make Appointment")
        })
    })

    // it('Each method',()=>{
    //     //Each method for checked all the checkbox
    //     cy.get('#hobbieswrapper').each(checkBoxDiv =>{
    //         cy.wrap(checkBoxDiv).find('[type="checkbox"]').check({force:true})
    //     })
    // })
        
    
    it("Click on make appointment button",()=>{
               
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
    })

    it("Make Appointment",()=>{
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicare').click()
        cy.get('#txt_visit_date').type("30/03/2020")
        cy.get('#txt_comment').click({force:true})
        cy.get('#txt_comment').type("My name is")
        cy.get('#btn-book-appointment').click()
    })

    it("Appointment confirmation",()=>{
        cy.get('h2').contains("Appointment Confirmation")
        cy.get('#comment').contains("My name is")
    })
})