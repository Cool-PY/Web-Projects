var heading = document.querySelector('.container h1 span')
var wifiImg = document.querySelector('.container img')

const checkInternet = () => {
    if (navigator.onLine) {
        heading.innerText = 'On'
        heading.style.opacity = '1'
        wifiImg.setAttribute('src', 'images/on-wifi.png')
    }

    else if (!navigator.onLine){
        heading.innerText = 'Off'
        heading.style.opacity = '1'
        wifiImg.setAttribute('src', 'images/off-wifi.png')
    }
}

setInterval(checkInternet, 1000)
