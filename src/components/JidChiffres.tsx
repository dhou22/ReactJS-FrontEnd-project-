import React from 'react';
import { Card } from 'primereact/card';

const statistics = [
  { title: 'Partenaires', value: 4, icon: 'pi pi-briefcase' },
  { title: 'Membres', value: 72, icon: 'pi pi-users' },
  { title: 'Événements/An', value: 5, icon: 'pi pi-calendar' },
  { title: 'Formations/An', value: 6, icon: 'pi pi-book' },
];

const JidChiffres: React.FC = () => {
  return (
    <div className="jid-container">
      <h2 className="section-title">JID en Chiffres</h2>
      <div className="jid-cards-wrapper">
        {statistics.map((stat, index) => (
          <Card key={index} className="jid-card">
            <div className="jid-card-overlay">
              <i className={`jid-icon ${stat.icon}`} />
              <h3 className="jid-value">{stat.value}</h3> {/* Removed the "+" */}
              <p className="jid-text">{stat.title}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JidChiffres;
