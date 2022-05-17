const homeScreen = require('../screens/home')

describe('Deve preencher os campos com sucesso', () => {

    it('Deve clicar em Forms', async () => {

        await homeScreen.goToForms()

    });

    it('Deve preencher o input field', async () => {

        await homeScreen.type()
    })

    it('Deve mudar o Switch', async () => {

        await homeScreen.clickSwitch()

    });

  

})