 /// <reference types="cypress" />


 describe("Register User",()=>{
    let userdata;
    before(function () {
        // "this" points at the test context object
        cy.fixture('users').then((user) => {
          // "this" is still the test context object
          userdata = user
        })
      })
    it("Register Valid User",()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.title().should("eq","iNeuron Courses")
        cy.contains("New user? Signup").click()
        cy.url().should("include","/signup")
        cy.contains("Sign up").should("be.disabled")
        cy.get("input[name='name']").type(userdata.name)
        cy.get("input[name='email']").type(userdata.email)
        cy.get("input[name='password']").type(userdata.password)
        // cy.get("input[type='checkbox']").click({multiple:true})
        cy.get("input[type='checkbox']").first().click()
        cy.get("input[type='checkbox']").last().click()
        cy.get("input[type='checkbox']").eq(3).click()
        cy.get("input[value='Male']").click()
        cy.get("select[name='state']").select(userdata.stateName).should("have.value","Goa")
        cy.contains("Sign up").should("be.enabled").click()
        

        //Login with user emai and password
        cy.get("input[name='email1']").type(userdata.email)
        cy.get("input[name='password1']").type(userdata.password)
        cy.get(".submit-btn").click()
        cy.contains("Sign out").click()
    })
 })