import catrina from "./assets/catrina.jpg"
import donaldson from "./assets/donaldson.jpg"
import faulkna from "./assets/faulkna.jpg"
import hendrix from "./assets/hendrix.jpg"
import margurite from "./assets/margurite.jpg"
import norris from "./assets/norris.jpg"
import tonia from "./assets/tonia.jpg"


type Contact = {
  id: string
  name: string,
  image: string,
  isActive: boolean,
  isFavorite: boolean | string,
  type: string,
  messages: string | number
}


export const contacts: Contact[] = [
  {
    id: "1",
    name: "Marguerite Campbell",
    image: margurite,
    isActive: true,
    isFavorite: true,
    type: "message",
    messages: 3
  },
  {
    id: "2",
    name: "Katrina Winters",
    image: catrina,
    isActive: false,
    isFavorite: true,
    type: "message",
    messages: "",
  },
  {
    id: "3",
    name: "Miranda Valentine",
    image: norris,
    isActive: true,
    isFavorite: true,
    type: "message",
    messages: "",
  },
  {
    id: "4",
    name: "Faulkner Benjamin",
    image: faulkna,
    isActive: true,
    isFavorite: true,
    type: "message",
    messages: "",
  },
  {
    id: "5",
    name: "Tonia Clay",
    image: tonia,
    isActive: true,
    isFavorite: false,
    type: "message",
    messages: "",
  },
  {
    id: "6",
    name: "Hendrix Martin",
    image: hendrix,
    isActive: false,
    isFavorite: false,
    type: "message",
    messages: "",
  },
  {
    id: "7",
    name: "Dean Vargas",
    image: catrina,
    isActive: true,
    isFavorite: false,
    type: "message",
    messages: 5,
  },
  {
    id: "8",
    name: "Donaldson Riddle",
    image: donaldson,
    isActive: true,
    isFavorite: false,
    type: "message",
    messages: "",
  },
  {
    id: "9",
    name: "Norris Decker",
    image: norris,
    isActive: true,
    isFavorite: false,
    type: "message",
    messages: "",
  },
  {
    id: "10",
    name: "Zimmerman Langley",
    image: margurite,
    isActive: true,
    isFavorite: false,
    type: "message",
    messages: "",
  },
  {
    id: "landing_design",
    name: "Landing Design",
    image: "#",
    isActive: false,
    isFavorite: "none",
    type: "channel",
    messages: 12
  },
  {
    id: "design_phase_2",
    name: "Design Phase 2",
    image: "#",
    isActive: true,
    isFavorite: "none",
    type: "channel",
    messages: ""
  },
  {
    id: "brand_suggestion",
    name: "Brand Suggestion",
    image: "#",
    isActive: false,
    isFavorite: "none",
    type: "channel",
    messages: 85
  },
  {
    id: "reporting",
    name: "Reporting",
    image: "#",
    isActive: true,
    isFavorite: "none",
    type: "channel",
    messages: ""
  }

]





