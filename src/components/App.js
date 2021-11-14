import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then((r) => r.json())
      .then(listingData => {
        setListings(listingData)
        setAllListings(listingData)
      })
  }, [])

  function handleDeleteClick(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  function handleSearchSubmit(item) {
    const updatedListings = allListings.filter((listing) => listing.description.includes(item));
    setListings(updatedListings);
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listings} onDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
