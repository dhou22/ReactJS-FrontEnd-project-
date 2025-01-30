import React from 'react';
import 'primeflex/primeflex.css';
import { Ripple } from 'primereact/ripple';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';


interface BoardMember {
    name: string;
    post: string;
    image: string;
    hoverText: string; // New property for customized hover text
}

const boardMembers: BoardMember[] = [
    { name: 'Amina Zayoud', post: 'Présidente', image: 'amina.jpg', hoverText: `étudiante en 2ème année cycle ingénieur à l'École nationale d’ingénieurs de sousse` },
    { name: 'Dhouha Meliane', post: 'Responsable projets', image: 'dhouha.jpg', hoverText: `étudiante en 2éme année cycle ingénieur data science à l'ESPRIT ` },
    { name: 'Rahma Aroua', post: 'Responsable marketing', image: 'rahma.jpg', hoverText: 'étudiante en 2éme année cycle ingénieur génie logiciel à la faculté des sciences tunis' },
    { name: 'Ahmed Bakir', post: 'Trésorier', image: 'ahmed.jpg', hoverText: `Étudiant en 3ème année cycle ingénieur communications et réseaux à l’école nationale d’ingénieurs de gabes` },
    { name: 'Fatma Andoulsi', post: 'Secrétaire générale', image: 'fatma.jpg', hoverText: 'étudiante en 3éme année cycle ingénieur chimie à la faculté des sciences tunis' },
    { name: 'Ons Zarraa', post: 'Responsable RH', image: 'ons.jpg', hoverText: `étudiante en 1ère année cycle ingénieur chimie industrielle à l’institut national des sciences appliquées et de technologie` },
];

const ExecutiveBoard = () => {
    return (
        <div>
            <div className="executive-board">
                <h1 className="title">Bureau Exécutif 2023-2024</h1>
                <div className="board-grid">
                    {boardMembers.map((member, index) => (
                        <div key={index} className="board-card">
                            <div className="card-content">
                                <div className="image-wrapper">
                                    <Image
                                        src={`/images/${member.image}`}
                                        alt={member.name}
                                        className="card-image"
                                    />
                                    <div className="image-overlay">
                                        <h3>{member.hoverText}</h3>
                                        <Ripple />
                                    </div>
                                </div>
                                <div className="details">
                                    <h3>{member.name}</h3>
                                    <p>{member.post}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Footer Copyright */}
            
        </div>
    );
};






export default ExecutiveBoard;
