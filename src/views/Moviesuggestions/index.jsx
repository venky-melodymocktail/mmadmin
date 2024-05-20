import Moviesuggestions_1 from "./Moviesuggestions_1";
import "./Moviesuggestions.css";
import { observer } from "mobx-react";

const Moviesuggestions = observer(() => {
  return (
    <>
      <Moviesuggestions_1 />
    </>
  );
});

export default Moviesuggestions;
