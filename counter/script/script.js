// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            num:0,count:1
        };
    },
    methods: {
        kake(){
            this.count*=2;
        },
        wari(){
            this.count/=2;
        },
        reset(){
            this.count = 1;
        },
        tasu(){
            this.count += this.num;
        },
        hiku(){
            this.count -= this.num;
        }
    }
});