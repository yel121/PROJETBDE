import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <>
      {/* First Section */}
      <div className="about-first">
        <div className="about-left-first">
          <img src={about_img} alt="About" className="about-img" />
          <img src={play_icon} alt="Play Icon" className="play-icon" />
        </div>
        <div className="about-right-first">
          <h1>
            <span className="highlight About-highlight-blue">OBJECTIFS</span> DU BUREAU{' '}
            <span className="About-text-decoration-lines">DES ÉTUDIANTS</span>
          </h1>
          <p>
            <br />
            Cellule hébergée par l’ENSIT et rattachée à la Direction de la Vie Étudiante. Ses valeurs et principes
            s’inscrivent dans la continuité et le respect des valeurs morales et sociales du Royaume telles que
            consacrées par la Constitution du Royaume du Maroc et prévues par le Règlement Intérieur des Étudiants de
            l’Ecole des Nouvelles Sciences et Ingénierie: ENSIT, (Article 3).
          </p>
          <ul>
            <li>Encourager l’implication des étudiants dans le milieu associatif marocain et international.</li>
            <li>Représenter les étudiants au sein de l’Ecole.</li>
            <li>Relayer l’information entre l’Administration de l’ENSIT et ses étudiants.</li>
            <li>Dynamiser et développer la vie étudiante au sein du campus.</li>
            <li>Contribuer à la promotion interne et externe de la vie étudiante.</li>
            <li>
              Organiser des événements phares du BDE suivant un calendrier déterminé en début de chaque année, (Article
              X)
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="about-second">
        <div className="about-left-second">
          <img src={about_img} alt="About Second" className="about-img-second" />
          <img src={play_icon} alt="Play Icon Second" className="play-icon-second" />
        </div>
        <div className="about-right-second">
          <h1>
            <span className="About-text-decoration-lines"> POURQUOI  INTEGRER LE </span>
            <span className="highlight About-highlight-blue"> BDE</span>
          </h1>
          <p>
            <br />
            Intégrer le BDE chez BDE-ENSI vous permet de vivre une expérience étudiante unique.
            En rejoignant l’association, vous avez l’opportunité de vous investir dans des projets
            passionnants, de développer votre réseau, de renforcer vos compétences transversales
            et de participer à la création d’un environnement étudiant dynamique et enrichissant.
            C’est peut-être aussi la naissance de futures amitiés et beaucoup de beaux souvenirs.

            </p>
            
        </div>
      </div>

      {/* Third Section */}
      <div className="about-third">
        <div className="about-left-third">
          <img src={about_img} alt="About Third" className="about-img-third" />
          <img src={play_icon} alt="Play Icon Third" className="play-icon-third" />
        </div>
        <div className="about-right-third">
          <h1>
            <span> De </span> <span className="highlight About-highlight-blue">NOMBREUSES</span> <span className="About-text-decoration-lines"> ACTIVITES</span>
          </h1>
          <p>
            <br />
            Le BDE chez ENSIT propose une multitude d’activités pour animer la vie étudiante. 
            Des soirées conviviales, des projets humanitaires et sportifs, 
            et des partenariats avec des entreprises locales sont organisés pour offrir aux étudiants 
            des moments de détente, de partage et de découvertes. Pour qu’ils soient faisables,
            il faut une grande dose de motivation et beaucoup d’idées !
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
