import React, {useState} from 'react';

const QuoteGenerator = () => {
    const quotes = ["Coding like poetry should be short and concise. ― Santosh Kalwar","Clean code always looks like it was written by someone who cares. — Robert C. Martin", "Of course, bad code can be cleaned up. But it’s very expensive. — Robert C. Martin","Experience is the name everyone gives to their mistakes. – Oscar Wilde","Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth","Confusion is part of programming. ― Felienne Hermans"];

    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random()*quotes.length);
        setQuote(quotes[randomIndex]);
    };
    return(
        <>
        
            <div className="Box-container">
                <div className="text">
                    <h1 className="Box_Title">Quotes from Programmers and Coders</h1>
                    

                    <p className="Says_Quote">{quote}</p>
                    

                    <button className="button" onClick={getRandomQuote}> New Quote</button>
                </div>
            </div>
      
        </>
    );
}

export default QuoteGenerator