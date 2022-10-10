import UploadFile from "../pageObjects/UploadFile";

describe("Upload File",()=>{
    it('Upload file and assert file name',()=>{

       UploadFile.open();
        //Upload file name to the input field
        UploadFile.getFileInput
        .invoke("removeClass","file_input_hidden")
        .attachFile("Important.txt");

        //Click to the Upload Button
        UploadFile.getUploadBtn.click()

        //Assert the File name
        UploadFile.getSuccessfullMsgLabel.should('contain','uploaded successfully')
    })
})