const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            dealerCards:[],
            playerCards:[],
            deckId: '',
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
        playerDrawOneCard(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`,
            }).then((response) => {
                this.playerCards[playerCards.length].push(response.data.cards[0].image)
                console.log(playerCards)
            }).catch((error) => {
                console.log(error);
            });
        },
        dealerDrawOneCard(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`,
            }).then((response) => {
            }).catch((error) => {
            });
        },
        deal(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=4`,
            }).then((response) => {
                console.log(response.data.deck_id)
                this.dealerCards[0] = response.data.cards[0].image
                this.dealerCards[1] = response.data.cards[1].image
                this.playerCards[0] = response.data.cards[2].image
                this.playerCards[1] = response.data.cards[3].image
            }).catch((error) => {
                console.log(error);
            });
        },
        hit(){
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
                url: 'https://www.deckofcardsapi.com/api/deck/new/draw/?count=4', 
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted(){
        this.createDeck(),
        console.log('mounted')
    },
})