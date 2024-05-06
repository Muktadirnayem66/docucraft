import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const ContentPage = ({params:{contentId}}) => {
    return (
        <div>
            <ContentDisplay id={contentId}/>
        </div>
    );
};

export default ContentPage;