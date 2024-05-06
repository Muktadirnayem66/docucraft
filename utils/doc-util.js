export const getDocumentsByCategory = (docs, category)=>{
    return docs.filter(doc => doc.category === category)
}


export const getDocumentsByAuthor = (docs, author)=>{
    return docs.filter(doc => encodeURI(doc.author) === author)
}

export const getDocumentsByTags = (docs, tag)=>{
    return docs.filter(doc=> doc.tags.some(inputTag=>inputTag === tag))
}