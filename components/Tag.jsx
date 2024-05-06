import Link from 'next/link';
import React from 'react';

const Tag = ({tag}) => {
    return (
        <Link   className="bg-gray-200 p-1 rounded-md mr-2 text-xs" key={tag } href={`/tags/${tag}`}>

        {tag}
            
        </Link>
    );
};

export default Tag;