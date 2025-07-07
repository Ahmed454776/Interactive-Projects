import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About SimpleShop</h1>
      <p className="about-text">
        SimpleShop is a demo e-commerce frontend application built with React. It showcases the
        basic functionality of an online store, including product browsing, cart management,
        and routing between pages — all done with React, React Router, and Context API.
      </p>
      <p className="about-text">
        This project was developed to practice modern React concepts such as functional components,
        hooks, global state management using Context, and responsive UI with CSS Modules.
      </p>
      <p className="about-text">
        Note: This app is purely for educational/demo purposes. It does not include any backend,
        authentication, or real payment functionality.
      </p>
    </div>
  );
}

export default About;
