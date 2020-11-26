import { Box, Heading } from "grommet/es6";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

const GameOver = ({ score }) => {
  const message = `Essaie ce quizz sur le métro de Paris! J'ai eu un score de ${score}, et toi ?`;
  return (
    <Box
      direction="column"
      flex
      justify="center"
      gap="small"
      pad="medium"
      height={"large"}
    >
      <Box background="neutral-2">
        <Heading margin="medium" level={3}>
          Félécitation, c'était la derniere question.
        </Heading>
      </Box>
      <Box background="accent-4">
        <Heading margin="medium" level={3}>
          Vous avez obtenu {score} points
        </Heading>
      </Box>
      <Box background="neutral-1">
        <Heading margin="medium" level={3}>
          {score > 11
            ? "Beau score! Vous vivez quasiment dans le metro!"
            : score > 6
            ? "Beau score ! Vous avez bien rentabilisé votre pass navigo !"
            : score > 3
            ? "Pas mal pour un touriste !"
            : "Clairement vous préférez la marche ou le Uber."}
        </Heading>
      </Box>
      <Box direction="row" justify="center">
        <Heading margin="medium" level={3}>
          Partagez le quizz avec vos amis !
        </Heading>
      </Box>
      <Box direction="row" justify="evenly" wrap={true}>
        <EmailShareButton
          url={window.location.href}
          subject="Un Quizz sur le metro de Paris"
          body={message}
        >
          <EmailIcon />
        </EmailShareButton>
        <FacebookShareButton url={window.location.href} quote={message}>
          <FacebookIcon />
        </FacebookShareButton>
        <RedditShareButton url={window.location.href} title={message}>
          <RedditIcon />
        </RedditShareButton>
        <TelegramShareButton url={window.location.href} title={message}>
          <TelegramIcon />
        </TelegramShareButton>
        <TumblrShareButton url={window.location.href} title={message}>
          <TumblrIcon />
        </TumblrShareButton>
        <TwitterShareButton url={window.location.href} title={message}>
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href} title={message}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </Box>
      <Box direction="row" justify="center">
        <Heading margin="medium" level={3}>
          code du site sur <a href={"https://github.com/smailio"}>@smailio</a>
        </Heading>
      </Box>
    </Box>
  );
};

export default GameOver;
