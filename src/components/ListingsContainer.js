import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteClick }) {

  function deleteIndividualListing(id) {
    onDeleteClick(id)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => 
          <ListingCard
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            listing={listing}
            deleteIndividualListing={deleteIndividualListing}
          />
          )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
