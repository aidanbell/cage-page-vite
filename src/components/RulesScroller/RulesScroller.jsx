import RuleCard from "../RuleCard/RuleCard";
import "./RulesScroller.css";

export default function RulesScroller({ rules }) {
  return (
    <div className="rules-rules">
      <h3>Drink...</h3>
      {rules.map((rule, i) => <RuleCard rule={rule} key={i} />)}
    </div>
  );
}