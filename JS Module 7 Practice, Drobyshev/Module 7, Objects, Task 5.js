// Модуль 7, задание 5 - The console application that enables the user to define the hierarchy of electrical appliances, turn the devices on and off and calculate the total power consumption of all the turned on devices. This application uses classes instead of functions-constructors

class ElectricalDevice {
    constructor() {
        this.typeOfOutlet = 'Russia, C/F, 220V'
        this.cordRequired = 'Yes'
        this.switch = 'Off'
    }

    switchChange (switchPos) {
        return this.switch = switchPos
    }

    getVoltage (voltage) {
        if (this.switch === 'On') {
            return voltage
        }
    }
}

class HomeAppliances extends ElectricalDevice {
    constructor (model, room, voltage) {
        super();
        this.model = model
        this.room = room
        this.voltage = voltage
    }
}

class Computers extends ElectricalDevice {
    constructor(GPU, CPU, voltage) {
        super();
        this.graphicCard = GPU
        this.processor = CPU
        this.voltage = voltage
    }

    isOwnBuild (ownBuild) {
        console.log (ownBuild === 'Yes')
    }
}


let blender = new HomeAppliances('Vitamix 7500 Black', 'Kitchen', 120);

let vacuum = new HomeAppliances('Dyson Cyclone V10 Absolute', 'Pantry', 150);

let myComputer = new Computers('RTX 3090Ti', 'i9-11900K', 900);

let momComputer = new Computers('Integrated', 'Threadripper Pro 5995WX', 500);

function getVoltageSum () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i].getVoltage(arguments[i].voltage);
    }
    if (isNaN(result)) {
        console.log('Something went wrong. Please, check if all the devices are turned on')
    } else {
        console.log(`The total voltage output is ${result}V`)
    }
}

blender.switchChange('On')
momComputer.switchChange('On')
myComputer.switchChange('On')

getVoltageSum(blender, vacuum)
getVoltageSum(blender, myComputer, momComputer)