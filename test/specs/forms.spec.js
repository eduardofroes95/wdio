const homeScreen = require('../screens/home')

describe('Deve preencher os campos com sucesso', () => {

    it('Deve preencher o input field', async () => {

        await homeScreen.type()
    })

})