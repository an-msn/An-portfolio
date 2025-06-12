import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  HiX,
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { projectsData, ButtonConfig } from "./Data";
import "./projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);
  const modalRefs = useRef({});
  const modalRootRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => setIsClient(false);
  }, []);

  useEffect(() => {
    if (isClient) {
      modalRootRef.current = document.getElementById("modal-root");

      if (!modalRootRef.current) {
        const newRoot = document.createElement("div");
        newRoot.id = "modal-root";
        document.body.appendChild(newRoot);
        modalRootRef.current = newRoot;
      }
    }
  }, [isClient]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        toggleState !== 0 &&
        modalRefs.current[toggleState] &&
        !modalRefs.current[toggleState].contains(e.target)
      ) {
        setToggleState(0);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggleState]);

  //scroll lock
  useEffect(() => {
    if (toggleState !== 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleState]);

  return (
    <div className="projects__container container grid">
      {projectsData.map((item) => (
        <div className="projects__content" key={item.id}>
          <div className="projects__card">
            <img src={item.image} alt={item.title} className="projects__img" />
            <h3 className="projects__title">{item.title}</h3>
            <span
              className="projects__button"
              onClick={() => toggleTab(item.id)}
            >
              More Info
              <HiOutlineArrowSmRight className="projects__button-icon" />
            </span>
          </div>
        </div>
      ))}

      {/* Portal for modal - only render when client-side */}
      {isClient &&
        modalRootRef.current &&
        ReactDOM.createPortal(
          projectsData
            .filter((item) => toggleState === item.id)
            .map((item) => (
              <div
                className="active-modal projects__modal"
                key={`modal-${item.id}`}
              >
                <div
                  className="projects__modal-content"
                  ref={(el) => {
                    if (el) {
                      modalRefs.current[item.id] = el;
                    } else {
                      delete modalRefs.current[item.id];
                    }
                  }}
                >
                  <HiX
                    onClick={() => toggleTab(0)}
                    className="projects__modal-close"
                  />
                  <h3 className="projects__modal-title">
                    {item.originalTitle.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </h3>
                  <img
                    src={item.image}
                    alt={item.originalTitle}
                    className="projects__modal-img"
                  />

                  <div className="projects__modal-description">
                    <h4 className="projects__modal-subtitle">{item.title}</h4>
                    {item.description.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                    <ul className="projects__modal-features grid">
                      {item.features &&
                        item.features.map((feature, index) => (
                          <li className="projects__modal-feature" key={index}>
                            <HiOutlineCheckCircle className="projects__modal-icon" />
                            <p className="projects__modal-info">{feature}</p>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="projects__modal-buttons">
                    {(() => {
                      const config = ButtonConfig[item.id];

                      if (!config || config.type === "soon") {
                        return (
                          <span className="projects__modal-button projects__modal-button--disabled">
                            {config?.label || "Coming Soon"}
                          </span>
                        );
                      }

                      return (
                        <a
                          href={config.url}
                          className="projects__modal-button"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {config.label}
                        </a>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )),
          modalRootRef.current
        )}
    </div>
  );
};

export default Projects;
