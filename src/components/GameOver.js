import { Box, Heading } from "grommet/es6";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

const GameOver = ({ score }) => (
  <Box
    direction="column"
    flex
    // overflow={{ horizontal: "hidden" }}
    // align="center"
    justify="center"
    // alignContent="center"
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
    <Box
      // gap={"small"}
      direction="row"
      justify="evenly"
      // align="center"
      // alignContent="center"
      wrap={true}
    >
      <EmailShareButton url={window.location.href}>
        <EmailIcon />
      </EmailShareButton>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton url={window.location.href}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <PinterestShareButton url={window.location.href}>
        <PinterestIcon />
      </PinterestShareButton>
      <RedditShareButton url={window.location.href}>
        <RedditIcon />
      </RedditShareButton>
      <TelegramShareButton url={window.location.href}>
        <TelegramIcon />
      </TelegramShareButton>
      <TumblrShareButton url={window.location.href}>
        <TumblrIcon />
      </TumblrShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.href}>
        <WhatsappIcon />
      </WhatsappShareButton>
    </Box>
  </Box>
);

export default GameOver;
