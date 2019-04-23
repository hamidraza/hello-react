import React from "react";
import Button from "@material-ui/core/Button";

const Hello = ({ name, children }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <Button color="primary" variant="contained">
        Link
      </Button>
    </div>
  );
};

export default Hello;
