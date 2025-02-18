import { memo } from "react";
import "../index.css";

const Home = memo(() => {
  return (
  <section>
  <div className="container">
    <h1 className="with-left-underline">Bienvenu</h1>
  </div>
  </section>
  );
});

export default Home;