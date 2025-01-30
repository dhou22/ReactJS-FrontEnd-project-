import React from 'react';
import ComiteComponent from './ComiteComponent';
import { data } from '../data/ComitesData';

const ComiteSection = () => {
    return (
        <div className="comite-section py-6">
            {/* Title Section */}
            <div className="comite-title-section flex flex-column align-items-center">
                <h2 className="comite-title">Nos Comités</h2>
                <div className="comite-underline"></div>
            </div>

            {/* Committee Boxes Section */}
            <div className="comite-boxes flex flex-wrap justify-content-center gap-4 px-4">
                {data.map((comite, index) => (
                    <ComiteComponent
                        key={index}
                        img_src={comite.img_src}
                        name={comite.name}
                        description={comite.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ComiteSection;
