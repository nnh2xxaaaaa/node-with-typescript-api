import user from "./dataUser1.json";
const colors: Array<string> = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "cyan",
  "magenta",
  "teal",
  "lime",
  "olive",
  "navy",
  "maroon",
  "aqua",
  "silver",
  "white",
  "indigo",
  "gold",
  "violet",
  "coral",
  "orchid",
  "salmon",
  "sienna",
  "tan",
  "turquoise",
  "plum",
  "khaki",
  "lavender",
  "crimson",
  "ivory",
  "steelblue",
  "peru",
  "mediumslateblue",
  "darkgreen",
  "slategray",
  "mediumvioletred",
];
const Data: {
  id: number;
  name: string;
  address: string;
  company: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
}[] = [];

user.users.map((user, index) => {
  if (user.id % 2 === 0) {
    Data.push({
      id: user.id,
      name: user.firstName,
      address: user.address.city,
      company: user.company.title,
      location: {
        lat: user.address.coordinates.lat,
        lng: user.address.coordinates.lng,
      },
      color: colors[index],
    });
  }
});

export default Data;
