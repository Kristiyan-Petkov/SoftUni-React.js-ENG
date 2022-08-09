import { HeaderArea } from "./components/HeaderArea";
import { Welcome } from "./components/Welcome";
import { Services } from "./components/Services";
import { Promos } from "./components/Promos";
import { Footer } from "./components/Footer";

function App() {
  const promoDeals = [
    {
      title: 'Analysis',
      subTitle: 'Insights and Reporting',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
      imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
      price: 50,
    },
    {
      title: 'Charting',
      subTitle: 'PowerPoint and Keynote charting',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
      imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
      price: 50,
    },
    {
      title: 'Data and KPI',
      subTitle: 'Databases and KPI sheets',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
      imgUrl: 'https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg',
      price: 50,
    },
  ]

  return (
    <div className="App">
      <HeaderArea />
      <main>
        <Welcome />
        <Services />
        <Promos promos={promoDeals}/>
      </main>
      <Footer/>
    </div >
  );
}

export default App;
