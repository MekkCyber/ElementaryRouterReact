import React from "react";
import classes from "./Dog.module.css";
import Card from "./Card";
import { Link } from "react-router-dom";
const Dog = (props) => {

  return (
    <Card>
      <Link to={`/${props.name.toLowerCase()}`}>
        <button>
          <div>
            <img
              className={classes.round_img}
              src={props.source}
              alt="nothing to show"
            />
            <p>{props.name}</p>
          </div>
        </button>
      </Link>
    </Card>
  );
};

export default Dog;
