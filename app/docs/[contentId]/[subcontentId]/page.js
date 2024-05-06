import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const SubContentPage = ({params: {subcontentId}}) => {
    return (
        <div>
            <ContentDisplay id={subcontentId}/>
        </div>
    );
};

export default SubContentPage;