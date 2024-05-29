// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

// const TextScroller = ({ text }) => {
//   const [key, setKey] = useState(1);

//   const scrolling = useSpring({
//     from: { transform: "translate(60%,0)" },
//     to: { transform: "translate(-60%,0)" },
//     config: { duration: 10000 },
//     reset: true,
//     //reverse: key % 2 == 0,
//     onRest: () => {
//       setKey(key + 1);
//     }
//   });

//   return (
//     <div key={key}>
//       <animated.div style={scrolling}>{text}</animated.div>;
//     </div>
//   );
// };

// export default TextScroller;



import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./TextScroller.css"; // Import the CSS file for additional styles

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%, 0)" },
    to: { transform: "translate(-100%, 0)" },
    config: { duration: 13000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div className="text-scroller-container my-10 text-xl text-red-400 font-bold" key={key}>
      <animated.div className="text-scroller-content" style={scrolling}>
        {text}
      </animated.div>
    </div>
  );
};

export default TextScroller;
