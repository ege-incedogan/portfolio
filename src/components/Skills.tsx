import { Box, Grid, Image, Text, Progress } from "@chakra-ui/react";
import pythonIcon from "../assets/python.png";
import htmlIcon from "../assets/htmlicon.png";
import jsIcon from "../assets/JSicon.png";
import cssIcon from "../assets/cssicon.png";
import sqlIcon from "../assets/database.png";
import mongoIcon from "../assets/mongodb.png";
import reactIcon from "../assets/react.png";
import "./skillicons.css";
import React from "react";

const Skills = () => {
  const skills = [
    { icon: pythonIcon, name: "Python", level: 90 },
    { icon: jsIcon, name: "JavaScript", level: 85 },
    { icon: sqlIcon, name: "MySQL", level: 70 },
    { icon: mongoIcon, name: "MongoDB", level: 75 },
    { icon: reactIcon, name: "React", level: 80 },
    { icon: htmlIcon, name: "HTML", level: 95 },
    { icon: cssIcon, name: "CSS", level: 90 },
  ];

  return (
    <Box className="AboutTextBox">
      <>
        <Text fontSize={"3xl"} mb={4}>
          Skill Levels
        </Text>
        <Grid templateColumns="50px 1fr 3fr" gap={4} w="100%">
          {skills.map((skill) => (
            <React.Fragment key={skill.name}>
              <Box
                className="skill-icon"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  className="skillicon"
                  height="40px"
                  width="40px"
                  maxWidth="40px"
                  src={skill.icon}
                />
              </Box>
              <Text className="skill-name" display="flex" alignItems="center">
                {skill.name}
              </Text>
              <Box
                className="skill-progress"
                display="flex"
                alignItems="center"
                w="100%"
              >
                <Progress
                  value={skill.level}
                  size="sm"
                  colorScheme="gray"
                  borderRadius="md"
                  w="100%"
                />
              </Box>
            </React.Fragment>
          ))}
        </Grid>
      </>
    </Box>
  );
};

export default Skills;
