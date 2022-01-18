let distance = prompt("Какая дистанция?")
const car = {
    name : 'VW',
    model : 'Golf',
    year : 2020,
    'middle speed' : 90,
    "fuel tank" : 60,
    'fuel consumption on 100' : 8,
    drivers : function(name) {
        name = 'Dima'
        console.log(`Водитель, ${name}`);
    },

    refueling : function(kmOneTank) {
        let oneTank = (car["fuel tank"] / car['fuel consumption on 100']) //7.5
        let kmL = (100 / car['fuel consumption on 100']) //12.5
        kmOneTank = (car["fuel tank"] * kmL) //750
        return kmOneTank;
    },

    travelTime : function () {
        let travelTime = (distance / car['middle speed']);
        let timeOut = (car['middle speed'] * 4);
        let longWayTime = Math.floor(distance / timeOut);
        if (distance > car.refueling()) {
            console.log("Через " + car.refueling() +" км нужно заправиться")
        }
        if (distance < timeOut) {
            console.log("Вы приедите через " + travelTime.toFixed(1) + " часа, заправка не требуется")
        }else if (distance > timeOut){
            console.log("Время поездки " + (travelTime + longWayTime).toFixed(1) + " часов");
            console.log("Вы остановитесь через " + timeOut + " км - " + longWayTime + " раз(а) по одному часу для отдыха")
        }
    }
}

console.log(car);
car.drivers()
car.travelTime()
