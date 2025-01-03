import React from 'react';
import './ClubsTeams.css';  // Make sure to import the correct CSS file

const ClubsTeams = () => {
  const accordionData = [
    {
      title: 'UIR UICARE',
      content: 'Le club UICARE est un projet étudiant qui a vu le jour en mois d\'octobre 2022...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/deccfb0dc1f199e3bbbe0845c348bbd6c52a9922.png'
    },
    {
      title: 'UIR AéroStéria',
      content: 'Le club UIR AeroStéria est porté par un groupe d\'étudiants inscrits en filière d\'Ingénierie Aérospatiale...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/da0ed2d6b87aa2f2bd5ceab0dd7d2e824b5d672e.png'
    },
    {
      title: 'UIR Art',
      content: 'Le club UIR Art est un club d\'expression et de libération qui a pour objectif...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/f790c50c62b42cbcbbc83b7655242011c870b1a4.png'
    },
    {
      title: 'UIR AEA',
      content: 'Créé en mois de mars 2018, le club des étudiants ambassadeurs...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/2b965f4e8e819f75dcddcd078b87f6799396193f.png'
    },
    {
      title: 'UIR AutoMoto',
      content: 'Le club UIR Auto-Moto a été créé pour contribuer principalement...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/8592ac8ede55ff07713fa9eb7a4457939cd4d916.png'
    },
    {
      title: 'UIR Bright Smile',
      content: 'Le club UIR Bright Smile est une structure étudiante composée exclusivement des étudiants de la Faculté de Médecine Dentaire...',
      imageUrl: 'https://www.uir.ac.ma/upload/cbuilder/e58b5e86ad080bbfa126c8d995a40ad9565b16b1.png'
    }
  ];

  return (
    <div className="clubs-teams-container">
      <h2 className="clubs-teams-title">Clubs & Teams</h2>
      <div className="flip-card-container">
        {accordionData.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front of the Card */}
              <div className="flip-card-front">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              {/* Back of the Card */}
              <div className="flip-card-back">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubsTeams;
