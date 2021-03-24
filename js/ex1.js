const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  

  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; 
    }
  };

  const elementOption = (text, value) => {
    const optElement = document.createElement("option");

    optElement.textContent = text;

    optElement.value = value;

    return optElement;
  };


  const listElement = text => {
    const listElement = document.createElement("li");
    listElement.textContent = text;
    return listElement;
  };
  

  const houseElement = document.querySelector("select")

  houses.forEach(house => {
    houseElement.appendChild(elementOption(house.name, house.code));
  });

  
  houseElement.addEventListener("change", e => {

    const characters = getCharacters(e.target.value);
    const characterElement = document.getElementById("characters");
    
    characterElement.innerHTML = "";
    
    characters.forEach(character => {
      characterElement.appendChild(listElement(character));
    });
  });
