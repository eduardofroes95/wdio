const homeScreen = require('../screens/home')

describe('Deve preencher os campos com sucesso', () => {

    it('Deve clicar em Forms', async () => {

        await homeScreen.goToForms()

    });

    it('Deve preencher o input field', async () => {

        await homeScreen.type()
        await homeScreen.formsDown()
    })

    it('Deve mudar o Switch', async () => {

        await homeScreen.clickSwitch()

    });

    it('Deve clicar no dropdown e selecionar umas das opções', async () => {

        await homeScreen.clickDropdown()

    });

    it('Deve clicar em uma das opções do DropDown', async () => {
        await homeScreen.clickDrop()
    });

    it('Deve clicar em um dos botões', async () => {

        await homeScreen.clickButton()

    });

})