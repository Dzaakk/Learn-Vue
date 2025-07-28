const app = Vue.createApp({
    data() {
        return {
            name: 'Dzaky',
            age: 25,
            imageLink: 'https://shorturl.at/PbMk4'
        }
    },
    methods: {
        favoriteNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');