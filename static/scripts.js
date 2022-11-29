const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            cardImage: '',
            cardImage2: '',
            cardImage3: '',
            cardImage4: '',
            deckId: ''
        }
    },
    methods:{
        createDeck(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", 
            }).then((response) => {
                this.deckId = response.data.deck_id
                console.log(this.deckId)
            }).catch((error) => {
                console.log(error);
            });
        },
        drawCard(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`, 
            }).then((response) => {
                console.log(response.data.deck_id)
            }).catch((error) => {
                console.log(error);
            });
        },
        getCardImage(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/draw/?count=4", 
            }).then((response) => {
                console.log(response)
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
        this.createDeck(),
        this.getCardImage(),
        console.log('mounted')
    },
})