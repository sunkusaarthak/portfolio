/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Near By Application 🚀",
    description:
      "Enables users to find nearby locations, including restaurants, ATMs, and other points of interest.",
    url: "https://github.com/sunkusaarthak/near-by",
  },
  {
    title: "College Android Application 🤓",
    description:
      "Empowered students with a user-friendly platform to access essential college information, including details about staff, academics, study certificates, college offerings, Marks, and more",
    url: "https://github.com/sunkusaarthak/College-Android-Application/",
  },
  {
    title: "Android Material 3 Widgets",
    description:
      "About Android 12 new Material theming known as ‘Material You’ - a dynamic colour scheme.",
    url: "https://sunkusaarthak.medium.com/android-material-3-elements-4f48eb762cb",
  },
  {
    title: "100% Observability and its Applications",
    description:
      "100% observability that will change many of the existing problems and can improve conventional applications, some of it's applications and improvements.",
    url: "https://sunkusaarthak.medium.com/100-observability-and-its-applications-7a50f2207ded",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
