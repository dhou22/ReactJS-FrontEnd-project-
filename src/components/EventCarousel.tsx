import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const events = [
    {
        title: 'Chaqan Fatr',
        date: 'Mars 25 , 2024  ',
        time: '07:00 PM - 12:00 PM',
        location:`L'alliance française , djerba` ,
       
        images: ['chaqanftar2.jpg', 'chaqanfatr3.jpg', ]
    },
    {
        title: 'Chorba Talk ',
        date: 'Mars 24 , 2024',
        time: '10:00 AM - 04:00 PM',
        location: 'Innovation Lab, Science Park',
       
        images: ['/images/ai1.jpg', '/images/ai2.jpg', '/images/ai3.jpg']
    },
    {
        title: 'Startup Pitch Night',
        date: '2025-01-10',
        time: '06:00 PM - 09:00 PM',
        location: 'Startup Incubator, Downtown',
        
        images: ['/images/startup1.jpg', '/images/startup2.jpg', '/images/startup3.jpg']
    }
];

const EventCarousel: React.FC = () => {
    const eventTemplate = (event: any) => {
        return (
            <div className="p-card event-card">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                    <p>
                        <i className="pi pi-calendar"></i> {event.date}
                    </p>
                    <p>
                        <i className="pi pi-clock"></i> {event.time}
                    </p>
                    <p>
                        <i className="pi pi-map-marker"></i> {event.location}
                    </p>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="image-album">
                    {event.images.map((image: string, idx: number) => (
                        <img
                            key={idx}
                            src={image}
                            alt={`${event.title} ${idx}`}
                            className="event-image"
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="event-section">
            <h2 className="section-title">Nos événements</h2>
            <Carousel value={events} itemTemplate={eventTemplate} numVisible={1} numScroll={1} autoplayInterval={4000} />
        </div>
    );
};

export default EventCarousel;
