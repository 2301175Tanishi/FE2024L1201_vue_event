// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count:1
        };
    },
    methods: {
        increment(){
            this.count * 2;
        },
        decrement(){
            this.count / 2;
        }
    }
});