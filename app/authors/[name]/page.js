import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/doc-util';
import React from 'react';

const AuthorsPage = ({params:{name}}) => {
    const docs = getDocuments()
    const mathcedDocuments = getDocumentsByAuthor(docs, name)
    return (
       <ContentDisplay id={mathcedDocuments[0].id}/>
    );
};

export default AuthorsPage;