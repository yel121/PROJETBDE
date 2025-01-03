import React from "react";
import "./Announcements.css";

// Import images
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Announcement = () => {
  const announcements = [
    {
      id: 1,
      title: "Announce 1",
      description:
        "We are excited to announce the release of our new feature that will enhance your experience.",
      category: "Feature",
      image: user_1,
    },
    {
      id: 2,
      title: "Announce 2",
      description:
        "Scheduled maintenance on our servers will take place this weekend. Expect temporary outages.",
      category: "Maintenance",
      image: user_2,
    },
    {
      id: 3,
      title: "Announce 3",
      description:
        "A security update will be pushed tonight to improve app safety.",
      category: "Security",
      image: user_3,
    },
    {
      id: 4,
      title: "Announce 4",
      description:
        "Join us for a free webinar next week, covering advanced tips and tricks for using our platform.",
      category: "Event",
      image: user_4,
    },
    {
      id: 5,
      title: "Announce 5",
      description:
        "We're launching a new UI design! It's sleeker, faster, and more intuitive.",
      category: "Design",
      image: user_4,
    },
  ];

  return (
    <div
      className="announcements-container"
      onMouseEnter={() => pauseAnimation()}
      onMouseLeave={() => resumeAnimation()}
    >
      <div className="scroll-container">
        {announcements.concat(announcements).map((announcement, index) => (
          <Card
            key={`${announcement.id}-${index}`}
            title={announcement.title}
            description={announcement.description}
            category={announcement.category}
            image={announcement.image}
          />
        ))}
      </div>
    </div>
  );
};

const pauseAnimation = () => {
  const scrollContainer = document.querySelector(".scroll-container");
  scrollContainer.style.animationPlayState = "paused";
};

const resumeAnimation = () => {
  const scrollContainer = document.querySelector(".scroll-container");
  scrollContainer.style.animationPlayState = "running";
};

// Reusable Card Component
const Card = ({ title, description, category, image }) => {
  return (
    <div className={`card card-${category.toLowerCase()}`}>
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <span className="card__title">{title}</span>
        <p className="card__describe">{description}</p>
      </div>
    </div>
  );
};

export default Announcement;
