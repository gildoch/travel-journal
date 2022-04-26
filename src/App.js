import logo from "./logo.svg";
import "./App.css";
import NavBar from "./nav-bar/NavBar";
import Card from "./card/Card";
import Data from "./data/Data";
function App() {
  //Criar elementos de forma dinamica usando Map
  const cardElements = Data.map((card) => {
    return (
      <Card
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    );
  });
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <div className="row">
          {cardElements}
          {/* <Card
            title="Mount Fuji"
            location="Japan"
            googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
            startDate="12 Jan, 2021"
            endDate="24 Jan, 2021"
            description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            imageUrl="https://source.unsplash.com/WLxQvbMyfas"
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
