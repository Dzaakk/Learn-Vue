const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            showList: true,
        };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        listToggle() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');
