import React from "react";

const MeetLayout = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header1">
          <div>
            <span className="hfirst">
              You have extension installed that may effect the quality of your
              call
            </span>
          </div>
          <div>
            <span style={{ color: "blue" }}>Learn More</span>
          </div>
          <div>
            <span style={{ color: "blue" }}>Dismiss</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={require("./Images/top.png")}
          alt="top"
          style={{ width: "97%" }}
        />
      </div>
      <div className="body">
        <section>
          <img
            src={require("./Images/presenting.png")}
            alt="presenting"
            style={{ width: "85%" }}
          />
        </section>
        <aside>
          <img
            src={require("./Images/side.png")}
            alt="side"
            className="side-image"
          />
        </aside>
      </div>

      <div className="footer">
        <div>
          <h6 style={{ color: "white", fontSize: "12px" }}>
            12:23PM | UI Developer - Md Amir Alam - 7903991435
          </h6>
        </div>
        <div>
          <img
            src={require("./Images/second.png")}
            alt="second"
            style={{ height: "50px" }}
          />
        </div>
        <div>
          <img
            src={require("./Images/third.png")}
            alt="third"
            style={{ height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetLayout;
