const homeScreen = require('../screens/home')

describe('Acessar o Painel de Administrador e preencher os campos', () => {

    it('Deve acessar o painel com sucesso', async () => {

        await homeScreen.goToLogin()
    })

});
