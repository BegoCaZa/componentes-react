// import Button from './components/button/Button';
import Mails from './components/mails-component/Mails';
import Markers from './components/markers/Markers';
import Caramels from './components/caramels/Caramels';
import KilometersSabrina from './components/kilometersSabrina/KilometersSabrina';
import Apples from './components/apples/Apples';

const App = () => {
  return (
    <>
      <Mails quantity={150} hours={5} />
      <Markers boxes={6} markers={10} />
      <Caramels totalCaramels={34} groups={5} />
      <KilometersSabrina kilometers={120} hours={4} />
      <Apples totalApples={320} boxes={10} />
    </>
  );
};

export default App;
