/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue({
    el: "#app",

    data:
    {
        msg: "Benvenuto su Vue.js",
        img: "./assets/img/bella_1.jpg",
    },
    methods:
    {
        cambiaImagine() {
            if (this.img === "./assets/img/bella_1.jpg") {
                this.img = "./assets/img/bella.png";
            } else if (this.img === "./assets/img/bella.png") {
                this.img = "./assets/img/bella_2.jpg";
            } else {
                this.img = "./assets/img/bella_1.jpg";

            }
        }
    }
})