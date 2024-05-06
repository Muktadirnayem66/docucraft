import { getDocumentContent } from '@/lib/doc';
import Link from 'next/link';
import React from 'react';
import Tag from './Tag';

const ContentDisplay = async ({id}) => {

    const documentcontent = await getDocumentContent(id)

    
    return (
        <article className="prose dark:prose-invert">
            <h1>{documentcontent.title}</h1>
            <div>
                <span>
                    Published on: {documentcontent.date}
                </span> by {" "} <Link href={`/authors/${documentcontent.author}`}>
                {documentcontent.author}</Link> {" "}

                under the {" "} 

                <Link href={`/categories/${documentcontent.category}`}>{documentcontent.category}</Link> category.
            </div>
            <div>
                {
                    documentcontent.tags && documentcontent.tags.map((tag)=> <Tag key={tag} tag={tag}/>)
                }
            </div>
            <div className='lead' dangerouslySetInnerHTML={{__html: documentcontent.contentHtml }}/>

            </article>
    );
};

export default ContentDisplay;