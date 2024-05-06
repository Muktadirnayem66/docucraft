import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTags } from '@/utils/doc-util';
import React from 'react';

const TagsPage = ({params: {name}}) => {

    const docs = getDocuments()
    const mathcedDocuments = getDocumentsByTags(docs, name)
    return (
        <ContentDisplay id={mathcedDocuments[0].id}/>
    );
};

export default TagsPage;