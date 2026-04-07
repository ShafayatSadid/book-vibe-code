import React from 'react';

const Badge = ({text}) => {
    return (
        <button className={`bg-[#23BE0A]/5 text-[#23BE0A] py-1.5 text-[0.875rem] px-4 rounded-4xl`}>{text}</button>
    );
};

export default Badge;