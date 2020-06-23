
import React from 'react'

export default function WikiCard({item}) {

  function createMarkup() {
    return {__html: item.snippet}
  }

  const wikiUrl = `https://en.wikipedia.org/?curid=${item.pageid}`

  return (
    <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <h2 className="item-title">{item.title}</h2>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </a>
  )
}