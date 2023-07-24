import cageHero from "../../assets/cage_hero2.jpg";
import "./Landing.css"

export default function Landing() {
  return (
    <div className="wrapper">
      <p>
        Have you ever wanted to watch a really terrible Nicolas Cage movie,
        but are concerned about how you can get through it without drinking
        heavily? Fear no more; the Cage-Page has got your back!
      </p>
      <p>
        Search through Nic Cage's seemingly bottomless canon to find your
        movie, and have a look at some user-created rules to turn it into a
        drinking game! Add new rules as they come up, and once you're
        finished, give a drink to the rules that made you finish yours.
      </p>

      <img
        className="cage-hero"
        src={cageHero}
        alt="Nic Cage at a bar, pensive"
      />
    </div>
  );
}
