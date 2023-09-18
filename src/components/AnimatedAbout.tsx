import { Box } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import "./skillicons.css";

const AnimatedAbout = () => {
  return (
    <Box
      className="animatedtext"
      paddingTop={10}
      minHeight={"380px"}
      
      maxWidth={"600px"}
    >
      <TypeAnimation
        sequence={[
          "Hello my name is Ege incedoğan, a self-taught developer with a background in \n Finance and Accounting, ready to bring a unique blend of skills and expertise to the table. \n \n After dedicating years to pursuing my finance degree, I came to the realization that it \n wasn't the career path I wanted for my future. Instead, I decided to follow my \n passion and explore coding. \n \n To my delight, I discovered a deep love for programming, and I've since honed my \n developer skills to a confident level. Now, I am eagerly anticipating the opportunity\n to collaborate and work together with you.",
        ]}
        style={{ fontSize: "1em", display: "block", whiteSpace: "pre-line" }}
        wrapper="span"
        cursor={false}
        speed={90}
      />
    </Box>
  );
};

export default AnimatedAbout;
