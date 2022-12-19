// Module 7, Task 4 - The console application that enables the user to define the hierarchy of electrical appliances, turn the devices on and off and calculate the total power consumption of all the turned on devices.

function ElectricalDevice () {
    this.typeOfOutlet = 'Russia, C/F, 220V'
    this.cordRequired = 'Yes'
    this.switch = 'Off'
}

ElectricalDevice.prototype.switchChange = function (switchPos) {
    return this.switch = switchPos
}

ElectricalDevice.prototype.getVoltage = function (voltage) {
    if (this.switch === 'On') {
        return voltage
    }
}

function HomeAppliances (model, room, voltage) {
    this.model = model
    this.room = room
    this.voltage = voltage
}

HomeAppliances.prototype = new ElectricalDevice()

function Computers (GPU, CPU, voltage) {
    this.graphicCard = GPU
    this.processor = CPU
    this.voltage = voltage
}

Computers.prototype = new ElectricalDevice()

Computers.prototype.isOwnBuild = function (ownBuild) {
    console.log (ownBuild === 'Yes')
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
myComputer.switchChange('On')

getVoltageSum(blender, vacuum, momComputer)
getVoltageSum(blender, myComputer)