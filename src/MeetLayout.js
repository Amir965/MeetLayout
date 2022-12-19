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
            <button
              style={{
                color: "blue",
                paddingRight: "20px",
                border: "none",
                outline: "none",
                background: "none",
              }}
            >
              Learn More
            </button>
            <button
              style={{
                color: "blue",
                border: "none",
                outline: "none",
                background: "none",
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
      <div className="presenting-div">
        <div className="presenting-text">
          <img
            src={require("./Images/presentAll.png")}
            alt="PresentingIcon"
            style={{ height: "30px" }}
          />
          <span>You'r presenting to everyone</span>
        </div>
        <div className="presenting-text2">
          <button>Stop presenting</button>
        </div>
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
        <div className="footerInner">
          <h6 style={{ color: "white", fontSize: "12px" }}>
            12:23PM | UI Developer - Md Amir Alam - 7903991435
          </h6>
        </div>
        <div className="footerInner">
          <img
            src={require("./Images/mute.png")}
            alt="mute"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/meet.png")}
            alt="meet"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/cc.png")}
            alt="cc"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/raisehand.png")}
            alt="raisehand"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/presentingNow.png")}
            alt="presentingNow"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/stop.png")}
            alt="stop"
            className="footer-bottom-icon"
          />
          <img
            src={require("./Images/end.png")}
            alt="end"
            className="footer-bottom-icon"
          />
        </div>
        <div className="footerInner">
          <img
            src={require("./Images/notation.png")}
            alt="notation"
            className="footerInner-image"
          />
          <img
            src={require("./Images/member1.png")}
            alt="member"
            className="footerInner-image"
          />
          <img
            src={require("./Images/chat.png")}
            alt="chat"
            className="footerInner-image"
          />
          <img
            src={require("./Images/tringle.png")}
            alt="tringle"
            className="footerInner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetLayout;
