const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: ''
        }
    },
    watch: {
        result(value) {
            if (value !== '') {
                const that = this;
                setTimeout(function () {
                    that.result = '';
                    that.counter = 0;
                }, 5000);
            }
        }
    },
    computed: {
        outResult() {
            if (this.counter === 0) {
                return this.result = '';
            } else if (this.counter === 37) {
                return this.result = 'Correct!';
            } else if (this.counter < 37) {
                return this.result = 'Not there yet';
            } else if (this.counter > 37) {
                return this.result = 'Too much!';
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
    }
})

app.mount('#assignment');