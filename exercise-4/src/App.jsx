import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {/* For each place from AVAILABLE_PLACES, create a Place component */}
            {AVAILABLE_PLACES.map((place) => (
              <Place
                key={place.id} // The key is assigned here, not in the Place component
                title={place.title} // Pass the title as a prop
                image={place.image} // Pass the image object as a prop
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;