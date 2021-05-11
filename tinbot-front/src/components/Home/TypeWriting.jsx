import React from "react";
import "./TypeWriting.css";

import ReactTypingEffect from "react-typing-effect";

const TypeWriting = () => {
  return (
    <>
      <div className="container">
        <ReactTypingEffect
          text={["robot ménager", "robot lego", "droïde", "autobot"]}
          cursorRenderer={(cursor) => <h3>{cursor}</h3>}
          speed={100}
          eraseSpeed={100}
          eraseDelay={700}
          typingDelay={500}
          displayTextRenderer={(text, i) => {
            return (
              <h3>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{
                        color: "white",
                        padding: 0,
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </h3>
            );
          }}
        />
      </div>
    </>
  );
};

export default TypeWriting;
