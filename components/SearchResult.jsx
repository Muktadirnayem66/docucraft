import Link from 'next/link';
import React from 'react';

const SearchResult = ({term,searchResult, closeSearchResult }) => {

    return (
        <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
            <p className="!text-lg">
                Showing results for 
                <span className="mx-2 font-semibold">{term}:</span>
            </p>
            <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
            {
                searchResult.map((result)=>(
                    <li key={result.id}>
                    <Link href={`/docs/${result.id}`} className='transition-all hover:text-emerald-600' onClick={(e)=>closeSearchResult(e)}>
                    {result.title}
                    </Link>
                    </li>
                ))
            }

            </ul>
            
        </div>
    );
};

export default SearchResult;