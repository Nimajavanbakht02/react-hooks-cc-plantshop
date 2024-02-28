import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plants => setPlants(plants))
  }, []);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const plantInfo = {
      "name": name,
      "image": image,
      "price": price
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(plantInfo)
    })
    .then(respose => respose.json())
    .then(newPlant => {
      setPlants([...plants, newPlant]);
      setName("");
      setImage("");
      setPrice("");
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} plants={filteredPlants} handleSubmit={handleSubmit} name={name} image={image} price={price} setName={setName} setImage={setImage} setPrice={setPrice}/>
    </div>
  );
}

export default App;
