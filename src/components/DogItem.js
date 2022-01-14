import { useParams } from "react-router-dom";
import hazel from "../images/hazel.jpg";
import tubby from "../images/tubby.jpg";
import whiskey from "../images/whiskey.jpg";
import classes from "./DogItem.module.css";
const DogItem = (props) => {
  const router = useParams();
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ];
  return (
    <div className={classes.item}>
      <img className={classes.img} src={dogs.filter(dog=>dog.name.toLowerCase()===router.name)[0].src} alt="nothing to show" />
      <h1>{router.name}</h1>
      <p style={{ listStyle: "none" }}>
        {dogs
          .filter((dog) => dog.name.toLowerCase() === router.name)[0]
          .facts.map((fact) => (
            <li style={{ padding: "20px" }}>{fact}</li>
          ))}
      </p>
    </div>
  );
};

export default DogItem;
