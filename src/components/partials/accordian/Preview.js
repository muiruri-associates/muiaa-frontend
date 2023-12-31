import React, { useState } from "react";
import { Collapse } from "reactstrap";

const Accordion = ({ className, variation, ...props }) => {
  const [isOpen, setIsOpen] = useState("1");

  const toggleCollapse = (param) => {
    if (param === isOpen) {
      setIsOpen("0");
    } else {
      setIsOpen(param);
    }
  };
  

  return (
    <div className={[`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`]}>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("1")}>
          <h6 className="title">What is MUIA ?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
          <div className="accordion-inner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "2" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("2")}>
          <h6 className="title">Can I qualify for a loan?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "2" ? true : false}>
          <div className="accordion-inner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "3" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("3")}>
          <h6 className="title">What are the mortgage, personal and business rates ?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "3" ? true : false}>
          <div className="accordion-inner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "4" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("4")}>
          <h6 className="title">Why is MUIA edging out other loan providers?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "4" ? true : false}>
          <div className="accordion-inner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
