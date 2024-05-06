"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useDebounce } from '@/app/hooks/useDebounce';
import SearchResult from './SearchResult';
import { useRouter } from "next/navigation";


const Search = ({docs}) => {
    const [searchResult, setSearchResult] = useState([])
    const [term, setTerm] = useState("")
    const router = useRouter()

    const handleChange = (e)=>{
        
        const value = e.target.value;
        setTerm(value)
        doSearch(value)

    }

    const doSearch = useDebounce((term)=>{
        const found = docs.filter((doc)=>doc.title.toLowerCase().includes(term.toLowerCase()))
        console.log(found);
        setSearchResult(found)
    }, 500)


    const closeSearchResult = (e)=>{
        e.preventDefault();
        router.push(e.target.href)
        setTerm("")
    }

    return (
        <>
        <div className="lg:block lg:max-w-md lg:flex-auto">
          <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
                <Image
                  src="/search.svg"
                  alt="Search"
                  className="h-5 w-5"
                  width={50}
                  height={50} />
                <input
                  type="text"
                  value={term}
                  placeholder="Search..."
                  onChange={handleChange}
                  className="flex-1 focus:border-none focus:outline-none"
                />
              </button>
              {
                term && term.trim().length > 0 && (
                    <SearchResult term={term} searchResult={searchResult} closeSearchResult={closeSearchResult}/>
                )
              }
        </div>
        
      </>
    );
};

export default Search;