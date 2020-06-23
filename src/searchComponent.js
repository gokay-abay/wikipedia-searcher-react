
import React, { useState } from 'react';
import WikiCard from './wikiCard'

export default function SearchComponent() {

  const [query, setQuery] = useState("")
  const [items, setItem] = useState([])
  
  const searchWiki = async (e) => {
    e.preventDefault();

    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=links&list=search&srsearch=${query}&utf8=&format=json`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setItem(data.query.search)
      console.log(data)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchWiki}>
        <label htmlFor="query" className="label"></label>
        <input className="input" type="text" name="query" placeholder="Search for..." onChange={(e) => setQuery(e.target.value)} value={query}></input>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {items.map(item => (
          <WikiCard item={item} key={item.pageid}/>
        ))}
      </div>
    </>
  )
} 