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
  const [success, setSuccess] = React.useState(false);
  const [giveUp, setGiveUp] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);
  const [almost, setAlmost] = React.useState(false);

  const place_holder = hint
    .split("")
    .map(c => (c === " " ? " " : "_"))
    .join("");
  function handleInput(input) {
    if (giveUp || success) {
      return;
    }
    const norm_input = input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
    const norm_station_to_guess = station_to_guess
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
    const similarity = stringSimilarity.compareTwoStrings(
      norm_input,
      norm_station_to_guess
    );
    if (similarity > 0.7 && similarity < 1) {
      setAlmost(true);
    } else {
      setAlmost(false);
    }
    if (norm_input === norm_station_to_guess) {
      setSuccess(true);
    }
    setValue(input);
  }
  function reset() {
    setAlmost(false);
    setSuccess(false);
    setGiveUp(false);
    setShowHint(false);
    setValue("");
  }
  function handleGiveUp() {
    setGiveUp(true);
    setValue(station_to_guess);
  }
  function handleNewt() {
    reset();
    on_correct(giveUp ? 0 : showHint ? 0.5 : 1);
  }
  return (
    <Keyboard
      onEnter={
        success
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
                {giveUp
                  ? "C'était"
                  : almost
                  ? "Presque..."
                  : success
                  ? "Correct !"
                  : ""}
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
              onChange={event => handleInput(event.target.value)}
            />
          </FormField>
        </Box>
        {!success && !showHint && (
          <>
            <Box pad="medium">
              <Button
                color="status-warning"
                icon={<Info color="status-warning" />}
                label="Afficher l'indice"
                onClick={setShowHint.bind(undefined, true)}
              />
            </Box>
            <Box justify="center">
              <Text tag="p" color="status-warning" textAlign="center">
                Mais cette question ne rapportera que 0.5 au lieu de 1 point
              </Text>
            </Box>
          </>
        )}
        {!success && !giveUp && showHint && (
          <>
            <Box pad="medium">
              <FormField error>
                <Button
                  color="status-critical"
                  icon={<Alert color="status-critical" />}
                  label="Abandonner cette question"
                  onClick={handleGiveUp}
                />
              </FormField>
            </Box>
            <Box justify="center">
              <Text tag="p" color="status-critical" textAlign="center">
                Mais cette question ne rapportera pas de points.
              </Text>
            </Box>
          </>
        )}
        {(success || giveUp) && (
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
