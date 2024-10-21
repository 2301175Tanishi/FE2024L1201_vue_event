// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count:1
        };
    },
    methods: {
        kake(){
            this.count * 2;
        },
        wari(){
            this.count / 2;
        },
        reset(){
            this.count * 0;
        },
        tasu(){
            this.count + num;
        },
        hiku(){
            this.count - num;
        }
    }
});