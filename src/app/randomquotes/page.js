'use client'
import { useState, useEffect } from "react";
import styles from "./randomquotes.module.css";
import Script from 'next/script'

export default function RandomQuotes() {
  const [quote, setQuote] = useState(null);

  const fetchQuotes = async () => {
    const res = await fetch(`/api/quote`)
    const newQuotes = await res.json();
    // console.log(newQuotes)
    if (newQuotes && quote && newQuotes?.id === quote?.id){
      fetchQuotes()
    } else {
      setQuote(newQuotes)
    }
  }
  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <>
       <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
    <div className={styles.container}>
      <div id={"quote-box"} className={styles.quoteBoxClass}>
      <div className={styles.textContainer }></div>
        <div id={"text"}  className={styles.text}>"{quote?.text}"</div>
        <div id={"author"} className={styles.author}>- {quote?.author} -</div>
        <div className={styles.footer}>
            <a id={"tweet-quote"} href={"https://twitter.com/intent/tweet"} target="_blank" className={styles.link}>Tweet</a>

          <button id={"new-quote"} className={styles.btn} onClick={fetchQuotes}>
            New Quotes
          </button>
        </div>

      </div>
    </div>
    </>
  )
}