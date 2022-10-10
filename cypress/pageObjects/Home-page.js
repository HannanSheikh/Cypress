
class HomePage {
    getStarted = '#get-started'
    primaryMenu = '#primary-menu'
    ItemList = '#primary-menu [id*=menu-item]'

    get getStartedBtn(){
        return cy.get(this.getStarted)
    }

    get getPrimaryMenu(){
         return cy.get(this.primaryMenu)
    }

    get getMenuItemListEl(){
         return cy.get(this.ItemList)
    }

    open(){
        cy.visit('https://practice.automationbro.com')
    }

}

export default new HomePage();