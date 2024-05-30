import React from "react";
import Contact from "../Contact/Contact";
import photo from "../../images/photo.jpg";
const About = () => {
  return (
    <section style={{ backgroundColor: "#37474F" }} className="text-white py-5">
      <h2 className="text-center highlights fw-bold m-3">About me</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>
              I am Ishtiak Ahmed, form Joypurhat, Bangladesh. I am a passionate
              Web Developer and have about three years of professional
              experience in building and maintaining web application.
            </p>
            <p>
              I've had the opportunity to work at{" "}
              <a href="http://markopolo.ai/" target="_blank">
                Markopolo.ai
              </a>{" "}
              and{" "}
              <a href="https://c-sunshine.com/" target="_blank">
                C Sunshine
              </a>
              , where I honed my skills in front-end. I also have some
              opportunities to work on the backend part.
            </p>
            <p>
              Outside of work, I enjoy exploring new technologies and staying
              up-to-date with the latest industry trends. In my free time, I
              love reading books and gardening. I also love sports and games.
            </p>
            <p>
              I am learning and developing some exciting projects since 2019. My{" "}
              <a href="https://github.com/ishtiak-ahmed" target="_blank">
                Github
              </a>{" "}
              and <a href="https://www.linkedin.com/in/ishtiak-aahmed/" target="_blank">Linkedin</a> profile. You can reach me directly via email.
              <a href="mailto:ishtiak.aahmed@gmail.com" >ishtiak.aahmed@gmail.com</a>
            </p>
          </div>
          <div className="col-md-3 circle">
            <img src={photo} className="w-100 rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
