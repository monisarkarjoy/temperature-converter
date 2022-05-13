const submit = document.querySelector('.btn')
const celcius = document.querySelector('.celcius')
const fahrenheit = document.querySelector('.fahrenheit')
const kelvin = document.querySelector('.kelvin')
const weather_image = document.querySelector('.weather_image')

const conditionImage = {
    superCold: "https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    extraCold: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    cold: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80",
    normalCold: "https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80",
    normal: "https://images.unsplash.com/photo-1519375332725-dbb8a3571ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    sunny: "https://images.unsplash.com/photo-1534250441079-1b355ffbab76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    desert: "https://images.unsplash.com/photo-1515581247767-d78687bf2254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    sobji: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    lava: "https://images.unsplash.com/photo-1618681317438-a8dd7da06cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

}

let lastEdit = 'celcius';

const updateLastEdit = () => {
    celcius.addEventListener('keyup', (e) => {
        lastEdit = 'celcius'
    })

    fahrenheit.addEventListener('keyup', (e) => {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup', (e) => {
        lastEdit = 'kelvin'
    })
};

updateLastEdit();

const updateImage = (temp) => {
    if(temp < -50 && temp < -10) {
        weather_image.setAttribute('src', conditionImage.superCold)
    }else if(temp < -10) {
        weather_image.setAttribute('src', conditionImage.extraCold)
    }
    else if (temp > -10 && temp <= 0) {
        weather_image.setAttribute('src', conditionImage.cold)
    }else if (temp > 0 && temp <= 15) {
        weather_image.setAttribute('src', conditionImage.normalCold)
    }else if (temp > 15 && temp <= 25) {
        weather_image.setAttribute('src', conditionImage.normal)
    }else if (temp > 25 && temp <= 35) {
        weather_image.setAttribute('src', conditionImage.sunny)
    }else if (temp > 35 && temp < 1000) {
        weather_image.setAttribute('src', conditionImage.desert)
    }else if (temp >= 1000) {
        weather_image.setAttribute('src', conditionImage.lava)
    }
    else {
        weather_image.setAttribute('src', conditionImage.sobji)
    }
}

const convert = (lastEdited) => {
    if(lastEdited === 'celcius'){
        const fVlue = (parseFloat(celcius.value) * 9 / 5) + 32
        const kVlue = (parseFloat(celcius.value)) + 273

        fahrenheit.value = Math.floor(fVlue) + ' °F'
        kelvin.value = Math.floor(kVlue) + ' K'

    }else if(lastEdited === 'fahrenheit') {
        const cVlue = (parseFloat(fahrenheit.value) -32) * 5/9
        const kVlue = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273

        celcius.value = Math.floor(cVlue) + ' °C'
        kelvin.value = Math.floor(kVlue) + ' K'

    }else if (lastEdited === 'kelvin') {
        const cVlue = parseFloat(kelvin.value) - 273
        const fVlue = (parseFloat(kelvin.value) - 273) * 9/5 + 32

        celcius.value = Math.floor(cVlue) + ' °C'
        fahrenheit.value = Math.floor(fVlue) + ' °F'
        

    }
}

submit.addEventListener('click', () => {
    convert(lastEdit)
    let temp = 0
    if(lastEdit === 'celcius'){
        temp = celcius.value
    }else if(lastEdit === 'fahrenheit') {
        temp = (parseFloat(fahrenheit.value) - 32) * 5/9
    }else if (lastEdit === 'kelvin') {
        temp = parseFloat(kelvin.value) - 273

    }
    updateImage(temp)
})

