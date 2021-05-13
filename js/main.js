'use strict';

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !',
        texte: 'Coucou',
        selectedConcert: '',
        tickets: {
            normal: 0,
            reduced: 0
        },
        concerts: [
            {
                title: 'Hans Zimmer',
                tickets: {
                    normal: 119.9,
                    reduced: 80
                }
            },
            {
                title: 'Disney',
                tickets: {
                    normal: 60,
                    reduced: 45
                }
            },
            {
                title: '2pac',
                tickets: {
                    normal: 200,
                    reduced: 150
                }
            },
            {
                title: 'Beyonce',
                tickets: {
                    normal: 150,
                    reduced: 100
                }
            }
        ]
    },
    computed: {
        total: function () {
            return this.selectedConcert.tickets.normal * this.tickets.normal + this.selectedConcert.tickets.reduced * this.tickets.reduced
        }
    }
});