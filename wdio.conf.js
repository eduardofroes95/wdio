exports.config = {
    const: { join } = require('path'),

hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            "platformName": "Android",
            "platformVersion": "11.0",
            "deviceName": "Edu",
            "automationName": "UiAutomator2",
            "app": "./app/android/nativeDemoApp.apk",
            "appPackage": "com.wdiodemoapp",
            "appActivity": "com.wdiodemoapp.MainActivity"
        }
    ]
}