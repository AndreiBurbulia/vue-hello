/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue({
    el: "#app",

    data: {
        msg: "Benvenuto su Vue.js",
        img: "./assets/img/sfondo_ride.jpg"
    }
})