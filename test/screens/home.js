class homeScreen {
    get enterLogin() {
        return $('id:Forms')
    }

    async goToLogin() {

        this.enterLogin.click()
    }

    get enterForms() {
        return $('id:text-input')
    }

    async type() {
        this.enterForms.click()
        this.enterForms.addValue('Eduardo')

    }

    get switch() {
        return $('id:switch')
    }

    async clickSwitch() {
        this.switch.click()
    }
}

module.exports = new homeScreen()