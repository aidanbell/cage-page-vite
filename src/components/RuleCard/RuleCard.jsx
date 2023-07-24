import { Paper, Button } from "@mui/material";
import SportsBarIcon from "@mui/icons-material/SportsBar";

import "./RuleCard.css";

export default function RuleCard({rule, handleAddToast}) {
  return (
    <Paper className="rule">
      <p>...{rule.content}</p>
      <Button className="rules-toasts" variant="outlined" endIcon={<SportsBarIcon/>} onClick={() => handleAddToast(rule._id)}>
        <span>{rule.toasts.length}</span>
      </Button>
    </Paper>
  );
}
