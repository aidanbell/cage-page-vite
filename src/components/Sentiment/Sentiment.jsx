// import {SentimentDissatisfied} from "@mui/icons-material/SentimentDissatisfied";
// import {SentimentNeutral} from "@mui/icons-material/SentimentNeutral";
// import {SentimentSatisfied} from "@mui/icons-material/SentimentSatisfied";
// import {SentimentSatisfiedAlt} from "@mui/icons-material/SentimentSatisfiedAlt";
// import {SentimentVerySatisfied} from "@mui/icons-material/SentimentVerySatisfied";

import {
  SentimentVeryDissatisfiedOutlined,
  SentimentNeutralOutlined,
  SentimentSatisfiedOutlined,
  InsertEmoticonOutlined,
  SentimentVerySatisfiedOutlined,
} from "@mui/icons-material";

import { Icon } from "@mui/material";

export default function Sentiment({ rating }) {
  let sentiments = [
    <SentimentVeryDissatisfiedOutlined />,
    <SentimentNeutralOutlined />,
    <SentimentSatisfiedOutlined />,
    <InsertEmoticonOutlined />,
    <SentimentVerySatisfiedOutlined />,
  ];
  return sentiments[Math.floor(rating / 2 - 1)];
}