import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByCategory } from '@/utils/doc-util';
import React from 'react';

const CategoriesPage = ({params: {name}}) => {
    const docs = getDocuments()
    const mathcedDocuments = getDocumentsByCategory(docs, name)

    return (
       <ContentDisplay id={mathcedDocuments[0].id}/>
    );
};

export default CategoriesPage;