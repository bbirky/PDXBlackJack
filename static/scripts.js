const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            deckId: '',
            dealerCards:[],
            playerCards:[],
            playerScore: 0,
            dealerScore: 0,
        }
    },
    methods:{
        createDeck(){
            axios({
                method: 'get',
                url: "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", 
            }).then((response) => {
                this.deckId = response.data.deck_id
                console.log(this.deckId)
            }).catch((error) => {
                console.log(error);
            });
        },
        deal(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=4`,
            }).then((response) => {
                console.log('Draw res',     response)
                this.playerCards.push(response.data.cards[0])
                this.playerCards.push(response.data.cards[1])
                this.dealerCards.push(response.data.cards[2])
                this.dealerCards.push(response.data.cards[3])
                this.evaluateScore()
            }).catch((error) => {
                console.log(error);
            });
        },
        hit(){
            axios({
                method: 'get',
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`,
            }).then((response) => {
                this.playerCards.push(response.data.cards[0])
                this.evaluateScore()
            }).catch((error) => {
                console.log(error);
            });
        },
        evaluateScore(){
            this.playerScore = 0
            for (let i = 0; i < this.playerCards.length; i++) {
                if (this.playerCards[i].value == 'ACE') {
                    this.playerScore += 11;
                } else if (this.playerCards[i].value == 'KING') {
                    this.playerScore += 10;
                } else if (this.playerCards[i].value == 'QUEEN') {
                    this.playerScore += 10;
                } else if (this.playerCards[i].value == 'JACK') {
                    this.playerScore += 10;
                } else {
                    this.playerScore += parseInt(this.playerCards[i].value);
                }
            }
        },
    },
    mounted(){
        this.createDeck(),
        console.log('mounted')
    },
})