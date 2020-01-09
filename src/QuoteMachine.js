import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class QuoteMachine extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: '',
            author: '',
            bg: ''
        }
        this.getQuote = this.getQuote.bind(this);
       
    }

    firstQuote(){
        if (this.state.quote===''){
            this.getQuote()
        }
            
    }
    getQuote() {
        console.log("GetQuote function clicked");
        let quote = ['Скажи еще спасибо что живой', 'Пидпис Здесь и Пидпис Здесь', 'Here we go again', 'Wub Wub', 'Yolka','I Never told that','Zdravstvuyte, Tsar.'];
        let authors = ['Высоцкий', 'Anonymous of Ukrainian public service', 'CJ', 'Robot', 'Yanukovich', 'Buddha','Tsar']
        let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        let randomNum = Math.floor(Math.random() * quote.length)
        let iColor =Math.floor(Math.random()*colors.length)

        let randomQuote = quote[randomNum];
        let randomAuthor = authors[randomNum];
        let randomColor=colors[iColor]

        this.setState({
            quote: randomQuote,
            author: randomAuthor,
            bg: randomColor
            
        });
        document.body.style.backgroundColor= randomColor;
    }



    render() {
        this.firstQuote()
        console.log(this.state.quote, this.state.author);

        return (

            <div id='quote-box'>

                <p id='text' style={{ color: this.state.bg }}>"{this.state.quote}</p>
                <p id='author' style={{ color: this.state.bg }}>-{this.state.author}</p>
                <div id='buttons'>
                    <button
                    id="tweet"
                    target="_blank"
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${this.state.quote}&hashtags=uatyroni`)}
                >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </button>
                <button id='new-quote' onClick={this.getQuote} style={{ background: this.state.bg }}>New Quote</button>
                <br />
                
                <br /></div>

            </div>
        )
    }
}


export default QuoteMachine;