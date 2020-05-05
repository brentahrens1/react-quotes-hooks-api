import React, { useState, useEffect } from 'react'

const Quotes = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuote = data.quotes
        let randonNum = Math.floor(Math.random() * dataQuote.length)
            let randomQuote = dataQuote[randonNum]
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
        }) 
    }

    const handleClick = () => {
        getQuote()
    }
    return (
        <div className="quotes">
            <div className="text">
                <p>{ quote }</p>
            </div>
            <div className="author">
                <p>{ author }</p>
            </div>
            <div className="btns">
                <button className="new-quote" onClick={handleClick}>New Quote</button>
            </div>
        </div>
    )
}


export default Quotes