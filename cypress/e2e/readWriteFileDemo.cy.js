 /// <reference types="cypress" />


describe("Read write file",()=>{

    it('read write from fixture',()=>{
        cy.fixture('example.json').then(data=>{
            cy.log(data.name),
            cy.log(data.email)
        })
    })



    it("Read file by using readFIile()",()=>{
       cy.readFile('../fixtures/example.json').then(data=>{
        cy.log(data.name)
       })
    })
    it("Write file by using readFIile()",()=>{
       cy.writeFile("sample.txt","Hello i am writting file\n")
       cy.writeFile("sample.txt","Hello i am using cypress",{flag:"a+"})
       })
})

