import Dog from "./Dog"
import React from "react"
import classes from './Dogs.module.css'
import hazel from '../images/hazel.jpg'
import tubby from '../images/tubby.jpg'
import whiskey from '../images/whiskey.jpg'
const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]

const Dogs = () => {
    return <div className={classes.flex}>
    {dogs.map(dog=>{return <Dog key={dog.name} name={dog.name} source={dog.src} facts={dog.facts}/>})}
</div>
}

export default Dogs