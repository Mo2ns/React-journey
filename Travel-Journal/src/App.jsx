import Header from "./components/Header"
import Entry from "./components/Entry"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Entry 
          img = "../images/Mount-Fuji.jpg"
          location = "Japan"
          link = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title = "Mount Fuji"
          date = "12 Jan, 2021 - 24 Jan, 2021"
          text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Entry 
          img = "../images/Eiffel-Tower.webp"
          location = "France"
          link = "https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,15z/data=!3m1!4b1!4m6!3m5!1s0x47e6c8b9c1a0a0a1:0x52e6b7d9f7c9d8f!8m2!3d48.8583701!4d2.2944813!16zL20vMGNrczA?entry=ttu"
          title = "Eiffel Tower"
          date = "5 Feb, 2021 - 10 Feb, 2021"
          text = "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
        />
      </div>
    </>
  )
}

export default App
