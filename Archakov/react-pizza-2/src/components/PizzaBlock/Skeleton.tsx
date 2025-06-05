import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="290" rx="6" ry="6" width="280" height="24" />
        <rect x="0" y="320" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="420" rx="6" ry="6" width="91" height="31" />
        <rect x="137" y="415" rx="20" ry="20" width="140" height="40" />
    </ContentLoader>
);

export default Skeleton;
