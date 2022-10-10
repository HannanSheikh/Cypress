class UploadFile {

    open(){
        cy.visit('https://practice.automationbro.com/cart/')
    }

    get getFileInput(){
        return cy.get("input[type=file]")
    }

    get getUploadBtn(){
        return cy.get("input[value='Upload File']")
    }

    get getSuccessfullMsgLabel(){
        return cy.get('#wfu_messageblock_header_1_label_1',{timeout: 10000})
    }
}

export default new UploadFile();