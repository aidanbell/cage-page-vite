import { useState } from "react";
import { TextField, Button } from "@mui/material";

import "./RulesForm.css";

export default function RulesForm({ user, movieId, goAddRule }) {
  const [content, setContent] = useState("");

  async function handleAddRule(e) {
    e.preventDefault();
    if (content.length < 20) return;
    goAddRule({ content, user: user._id, movieId })
    setContent("")
  }

  return (
    <form className="rules-form" onSubmit={handleAddRule}>
      <TextField
        required
        className="rules-form-content"
        label="Drink..."
        name="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        minRows={3}
        multiline
        fullWidth
      />
      <Button onClick={handleAddRule} variant="outlined" size="large" fullWidth>
        Add Rule
      </Button>
    </form>
  );
}