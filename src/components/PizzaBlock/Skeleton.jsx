import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="135" y="392" rx="3" ry="3" width="142" height="32" />
    <rect x="5" y="395" rx="3" ry="3" width="74" height="25" />
    <rect x="-24" y="283" rx="3" ry="3" width="410" height="86" />
    <circle cx="132" cy="129" r="129" />
  </ContentLoader>
);

export default Skeleton;
