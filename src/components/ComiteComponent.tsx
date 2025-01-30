import React from 'react';
import { Image } from 'primereact/image';

interface Props {
    img_src: string;
    name: string;
    description: string;
}

const ComiteComponent = ({ img_src, name, description }: Props) => {
    return (
        <div className="comite-card">
            <Image
                src={img_src}
                alt="Committee logo"
                imageClassName="border-circle"
                width="100"
            />
            <p className="comite-card-title">{name}</p> {/* Ensure this class matches the CSS */}
            <p className="comite-card-description">{description}</p>
        </div>
    );
};

export default ComiteComponent;
