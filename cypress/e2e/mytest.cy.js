import HomePage  from "../pageObjects/Home-page";


describe('Practice Cypress', () => {
  it('passes', () => {

    //open the homepage
    HomePage.open();

    //Assert the URL
    cy.url().should('include','automationbro')

    //Assert the title
    cy.title().should('eq','Practice E-Commerce Site – Automation Bro')

  });
  it('clicks the get started button and assert the URL',()=>{

    //Getting button by ID
    HomePage.getStartedBtn.should($heading =>{
      console.log($heading.text())
    })
    HomePage.getStartedBtn.click()

    //Assert URL
    cy.url().should('include','get-started')

  })
  it('get the text of heading and assert value',()=>{

    //assert the value
    cy.get('h1.elementor-heading-title').should('have.text','Think different. Make different.')

    //it can also be done in this way. this is for get the text and use the text somewhere else as well
    // cy.get('h1.elementor-heading-title').should($heading=>{
    //   cy.expect($heading.text()).to.eq('Think different. Make different.')
    // })
  })

  it('verifies the text of the first menu item',()=>{

    HomePage.getPrimaryMenu.find('li').first().should('have.text','Home')
  })
  it('verify length of list and check each list item',()=>{
    const menuList = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ]
    HomePage.getMenuItemListEl.should("have.length",6)
    HomePage.getMenuItemListEl.each((item,index,list)=>{
      // cy.wrap(item).should('contain.text',menuList[index])
      expect(Cypress.$(item).text()).to.eq(menuList[index])
    })
  })
})