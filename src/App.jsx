import { useState } from 'react'
import getCats from "../src/services/CatService";
import css from './App.module.css'
import { CatsGrid } from './components/CatsGrid/CatsGrid';
import { Loader } from './components/Loader/Loader';
import { CatModal } from './components/CatModal/CatModal';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const openModal = (cat) => {
    setSelectedCat(cat);
  };
  
  const closeModal = () => {
    setSelectedCat(null);
  };

  const fetchCats = async () => {
    setIsLoading(true);

    try {
      setIsClicked(true);

      const cats = await getCats();

      setCats(cats);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>Welcome to mini-cat gallery!</h1>
      <button className={css.button} onClick={fetchCats}>{isClicked ? "Refresh cats" : "Load cats"}
      </button>
      
      {isClicked && <CatsGrid onSelect={openModal} cats={cats} loader={isLoading && <Loader/>}
       />}
      {selectedCat && <CatModal cat={selectedCat} onClose={closeModal}/>}
    </div>
  );
};

export default App
