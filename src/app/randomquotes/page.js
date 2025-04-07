'use client'
import { useState, useEffect, useCallback } from 'react';
import styles from './randomquotes.module.css';
import Script from 'next/script'


const data = [
  {
    id: 1,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 3,
    text: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    id: 4,
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    id: 5,
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    id: 6,
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    id: 7,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    id: 8,
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    id: 9,
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    id: 10,
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
]

export default function RandomQuotes() {
  const [quote, setQuote] = useState(null);

  const fetchQuotes = useCallback(() => {
    if (!data || data.length === 0) return;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let newQuotes = data.find(r => r.id === randomNumber)
    if (!newQuotes) { newQuotes = data[0] }
    // console.log(newQuotes)
    if (newQuotes && quote && newQuotes?.id === quote?.id) {
      fetchQuotes()
    } else {
      setQuote(newQuotes)
    }
  }, [data]);

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  return (
    <>
      <Script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' />
      <div className={styles.container}>
        <div id={'quote-box'} className={styles.quoteBoxClass}>
          <div className={styles.textContainer}></div>
          <div id={'text'} className={styles.text}>&quot;{quote?.text}&quot;</div>
          <div id={'author'} className={styles.author}>- {quote?.author} -</div>
          <div className={styles.footer}>
            <a id={'tweet-quote'} href={'https://twitter.com/intent/tweet'} target='_blank' className={styles.link}>Tweet</a>

            <button id={'new-quote'} className={styles.btn} onClick={fetchQuotes}>
              New Quotes
            </button>
          </div>

        </div>
      </div>
    </>
  )
}