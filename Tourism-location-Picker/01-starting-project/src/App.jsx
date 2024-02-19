import { useRef, useState, useCallback} from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { useEffect } from 'react';
import { sortPlacesByDistance } from './loc.js';


const storedId = JSON.parse(localStorage.getItem('selectedPlaces')) || []
const storedPlaces = storedId.map((id)=>AVAILABLE_PLACES.find((place)=>place.id === id))
function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  
 
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      setAvailablePlaces(sortedPlaces)
      // console.log("infinite")
    })
  }, [])// here the [] is indicating that there is no dependencies and because of neither of the dependencies will be updated the useEffect will only axecuted once but if we(if useEffect is used in app component) again re render the entire website(not only the app component or its children)  this code will again run e.g when we do some changes and using ctrl + s we re-render it.

  // 2nd situation if you have used the useEFfect in some component and that component is redering conditionaly i mean if that is add and remove cycle from dom then also the useEffect specified in the component will re execute.

  // but if you are using any dependencies inside the [] then it will be executed every time when the values of the dpendencies changes not the re render of component. but if you don't use [] at all the use Effect will execute again in every re-render of component. 

  // you should use useEffect to prevent infinite loop(e.g, infinite component rendering, due to asynchronous code(because setTimeout or setInterval)) or if you have the code that can execute only once after the  app or any component function renders at least once.

  // THE ABOVE SYNTAX OF useEffect() is usefull for the code that runs only once in app component after the other code renders in app.

  //if any values(usually state or props) that is used inside the the useEffect is responsible for re-rendering of component (i mean value not state updating function ) is considered as dependencies 
    
  function handleStartRemovePlace(id) {
    // modal.current.open();
    setIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setIsOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const selecteId = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    if(selecteId.indexOf(id) === -1)
    {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...selecteId]));
    }
  }


  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setIsOpen(false)
    const placeId = JSON.parse(localStorage.getItem('selectedPlaces'))
    localStorage.setItem('selectedPlaces', JSON.stringify(placeId.filter((existingId)=> existingId !== selectedPlace.current)))
  },[] ) 

  return (
    <>
      <Modal  open = {isOpen} onClose = {handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={'Loading the available places'}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
