const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
        }
    },
    methods:{
        lastPage(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", 
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted(){
        this.lastPage(),
        console.log('mounted')
    },
})