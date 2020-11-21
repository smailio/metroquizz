import React from "react";
import { Box, Button, FormField, Keyboard, Text, TextInput } from "grommet";
import { Info, Alert } from "grommet-icons";
import stringSimilarity from "string-similarity";

export function PutStationOnLine({
  left_stations,
  station_to_guess,
  right_stations,
  line_name,
  hint,
  on_correct
}) {
  // left_stations and right_stations distinct

  const [value, setValue] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);
  const [almost, setAlmost] = React.useState(false);

  const place_holder = hint
    .split("")
    .map(c => (c === " " ? " " : "_"))
    .join("");
  function handleInput(input) {
    if (showSuccess) {
      return;
    }
    const similarity = stringSimilarity.compareTwoStrings(
      input.toLocaleLowerCase(),
      station_to_guess.toLocaleLowerCase()
    );
    if (similarity > 0.7 && similarity < 1) {
      setAlmost(true);
    } else {
      setAlmost(false);
    }
    if (input.toLocaleLowerCase() === station_to_guess.toLocaleLowerCase()) {
      setShowSuccess(true);
    }
    setValue(input);
  }
  function reset() {
    setAlmost(false);
    setShowSuccess(false);
    setShowHint(false);
    setValue("");
  }
  function handleGiveUp() {
    reset();
    on_correct(0);
  }
  function handleNewt() {
    reset();
    on_correct(showHint ? 0.5 : 1);
  }
  return (
    <Keyboard
      onEnter={
        showSuccess
          ? handleNewt
          : () => {
              console.log("click enter");
            }
      }
    >
      <Box
        direction="column"
        alignContent="center"
        align="center"
        wrap={true}
        justify={"center"}
      >
        <Box pad="medium" width="large">
          <ol className="line" data-line={line_name}>
            {left_stations.map(name => (
              <li key={name} className="stop">
                <strong className="stop__name">{name}</strong>
              </li>
            ))}
            <li className="stop">
              <strong className="stop__name">?</strong>
            </li>
            {right_stations.map(name => (
              <li key={name} className="stop">
                <strong className="stop__name">{name}</strong>
              </li>
            ))}
          </ol>
        </Box>
        <Box pad="medium" width="large">
          <FormField
            label={
              <Text size="small" tag="p" style={{ height: "25px" }}>
                {almost ? "Presque..." : showSuccess ? "Correct !" : ""}
              </Text>
            }
            info={showHint ? hint : place_holder}
            style={{
              letterSpacing: "0.5em",
              fontFamily: "monospace",
              whiteSpace: "nowrap"
            }}
          >
            <TextInput
              style={{
                letterSpacing: "0.5em",
                fontFamily: "monospace"
              }}
              value={value}
              // disabled={showSuccess}
              onChange={event => handleInput(event.target.value)}
            />
          </FormField>
        </Box>
        {!showSuccess && !showHint && (
          <Box pad="medium">
            <Button
              plain
              color="neutral-1"
              icon={<Info color="neutral-1" />}
              label="Afficher l'indice"
              onClick={setShowHint.bind(undefined, true)}
            />
          </Box>
        )}
        {!showSuccess && showHint && (
          <Box pad="medium">
            <FormField error>
              <Button
                color="red"
                plain
                icon={<Alert color="status-critical" />}
                label="Abandonner cette question"
                onClick={handleGiveUp}
              />
            </FormField>
          </Box>
        )}
        {showSuccess && (
          <Box pad="medium">
            <FormField>
              <Button
                primary
                color="neutral-2"
                label="Suivant"
                onClick={handleNewt}
              />
            </FormField>
          </Box>
        )}
      </Box>
    </Keyboard>
  );
}
