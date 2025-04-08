'use client'
import { useState, useEffect } from 'react';
import Script from 'next/script';

import styles from './markdownpreview.module.css';

export default function MarkdownPreview() {
    const [content, setContent] = useState('');
    const [html, setHtml] = useState('');
    const handleKeyPress = (e) => {
        setContent(e?.target?.value)
    }

    useEffect(() => {
      if (window.marked) {
        const result = window.marked.parse(content);
        setHtml(result);
      }
    }, [content]);

    return (
        <>
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/marked/15.0.7/marked.min.js' 
        strategy="beforeInteractive"/>
            <Script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' />
            <div className={styles.container}>
                <div id={'quote-box'} className={styles.quoteBoxClass}>
                    <label className={styles.boxEdit}>
                        Editor:
                        <textarea id={'editor'} className={styles.editor} onChange={(e) => handleKeyPress(e)} value={content}
                            rows={15} cols={60}
                        />
                    </label>
                    <label className={styles.boxContent}>
                        Content:
                        <div id={'preview'} className={styles.preview} dangerouslySetInnerHTML={{ __html: html }}></div>
                    </label>


                </div>
            </div>
        </>
    )
}