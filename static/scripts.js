const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            cardImage: '',
            cardImage2: '',
            cardImage3: '',
            cardImage4: ''
        }
    },
    methods:{
        createDeck(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", 
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            });
        },
        drawCard(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2", 
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            });
        },
        getCardImage(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/draw/?count=4", 
            }).then((response) => {
                this.cardImage = response.data.cards[0].image
                this.cardImage2 = response.data.cards[1].image
                this.cardImage3 = response.data.cards[2].image
                this.cardImage4 = response.data.cards[3].image
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted(){
        this.getCardImage(),
        console.log('mounted')
    },
})