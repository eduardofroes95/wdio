class homeScreen {
    get clickForms() {
        return $('~Forms')
    }

    async goToForms() {

        await this.clickForms.click()
    }

    get enterForms() {
        return $('~text-input')
    }

    async type() {
        await this.enterForms.click()
        await this.enterForms.addValue('Eduardo')

    }

    get closeForms() {
        return $('~input-text-result')
    }

    async formsDown() {
        await this.closeForms.click()
    }

    get switch() {
        return $('~switch')
    }

    async clickSwitch() {
        await this.switch.click()
    }

    get dropDown() {
        return $('~Dropdown')
    }

    async clickDropdown() {

        await this.dropDown.click()
    }

    get dropClick() {
        // xpath = //tagname[@atribute="value"]
        return $('//android.widget.CheckedTextView[@text="Appium is awesome"]')
    }

    async clickDrop() {
        await this.dropClick.click()
    }
}

module.exports = new homeScreen()