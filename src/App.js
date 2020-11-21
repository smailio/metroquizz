import React, { useState } from "react";
import { Box, Heading, Grommet, ResponsiveContext } from "grommet";
import { PutStationOnLine } from "./components/PutStationOnLine";
import { questions } from "./questions";
import GameOver from "./components/GameOver";

const theme = {
  formField: {
    // label: {
    //     color: 'dark-3',
    //     size: 'xsmall',
    //     margin: { vertical: '0', bottom: 'small', horizontal: '0' },
    //     weight: 600,
    // },
    border: false
    // margin: '0',
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box
            direction="column"
            flex
            align="center"
            justify="center"
            alignContent="center"
            margin="small"
          >
            <Box>
              <Heading level={3}>
                {score} / {questions.length}
              </Heading>
            </Box>
            <Box flex justify="center">
              {questions.length > questionNum ? (
                <PutStationOnLine
                  {...questions[Math.min(questionNum)]}
                  on_correct={points => {
                    if (questionNum < questions.length) {
                      setQuestionNum(questionNum + 1);
                      setScore(score + points);
                    }
                  }}
                />
              ) : (
                <GameOver score={score} />
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
