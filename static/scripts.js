const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            deckId: '',
            dealerCards:[],
            playerCards:[],
            playerScore: 0,
            dealerScore: 0,
            handInSession: false,
            playerWinCount: 0,
            playerLossCount: 0,
            playerPushCount: 0,
            announceWinner: "",
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
                url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`,
            }).then(() => {
                axios({
                    method: 'get',
                    url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=4`,
                }).then((response) => {
                    this.announceWinner = ""
                    this.playerCards = []
                    this.dealerCards = []
                    this.playerCards.push(response.data.cards[0])
                    this.playerCards.push(response.data.cards[1])
                    this.dealerCards.push(response.data.cards[2])
                    this.dealerCards.push(response.data.cards[3])
                    this.evaluatePlayerScore()
                    this.evaluateDealerScore()
                    this.handInSession = true
                }).catch((error) => {
                    console.log(error);
                });
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
                this.evaluatePlayerScore()
                if (this.playerScore > 21 ) {
                    this.handInSession = false;
                    this.stand();
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        stand(){
            if (this.dealerScore < 17 ){
                axios({
                    method: 'get',
                    url: `https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`,
                }).then((response) => {
                    this.dealerCards.push(response.data.cards[0])
                    this.evaluateDealerScore()
                    if (this.dealerScore < 17 ){
                        this.stand();
                    } else {
                        this.evaluateWinner();
                        this.handInSession = false;
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                this.evaluateWinner();
                this.handInSession = false;
            }   
        },
        evaluatePlayerScore(){
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
        evaluateDealerScore(){
            this.dealerScore = 0
            for (let i = 0; i < this.dealerCards.length; i++) {
                if (this.dealerCards[i].value == 'ACE') {
                    this.dealerScore += 11;
                } else if (this.dealerCards[i].value == 'KING') {
                    this.dealerScore += 10;
                } else if (this.dealerCards[i].value == 'QUEEN') {
                    this.dealerScore += 10;
                } else if (this.dealerCards[i].value == 'JACK') {
                    this.dealerScore += 10;
                } else {
                    this.dealerScore += parseInt(this.dealerCards[i].value);
                }
            }
        },
        evaluateWinner(){
            this.announceWinner = ""
            if (this.playerScore > this.dealerScore && this.playerScore <= 21){
                this.playerWinCount += 1;
                this.announceWinner = "You Win!";
            } else if (this.playerScore < this.dealerScore && this.dealerScore <= 21){
                this.playerLossCount += 1;
                this.announceWinner = "You Lose...";
            } else if (this.playerScore > 21 && this.dealerScore <= 21){
                this.playerLossCount += 1;
                this.announceWinner = "You Lose...";
            } else if (this.playerScore <= 21 && this.dealerScore > 21){
                this.playerWinCount += 1;
                this.announceWinner = "You Win!";
            } else if (this.playerScore == this.dealerScore && this.playerScore <= 21){
                this.playerPushCount += 1;
                this.announceWinner = "PUSH ...Not Great, Not Terrible...";
            } else {
                this.announceWinner = "";
            }
        }
    },
    mounted(){
        this.createDeck(),
        console.log('mounted')
    },
})