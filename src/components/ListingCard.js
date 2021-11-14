import React, {useState} from "react";

function ListingCard({ id, description, image, location, deleteIndividualListing}) {
  const [isClicked, setIsClicked] = useState(true)

  function handleLikeClick() {
    setIsClicked(!isClicked)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => deleteIndividualListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isClicked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
