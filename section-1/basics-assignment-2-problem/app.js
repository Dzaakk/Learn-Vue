const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        };
    },
    methods: {
        showAlert() {
            alert('Done!');
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput(event) {
            this.confirmedInput = this.userInput;
        }
    }
});

app.mount('#assignment');
