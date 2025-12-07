import { useState } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';



export default function Properties() {
  const allProperties = [
    { id: 1, title: "Modern Family House", price: 120000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Luxury Villa", price: 250000, location: "Alexandria, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Cozy Apartment", price: 80000, location: "Giza, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Beachside Villa", price: 300000, location: "Hurghada, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Downtown Apartment", price: 95000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Modern Duplex", price: 180000, location: "Alexandria, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Family Townhouse", price: 140000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Mountain Cabin", price: 90000, location: "Sinai, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 9, title: "Luxury Penthouse", price: 350000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 10, title: "Cozy Studio", price: 60000, location: "Giza, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 11, title: "Modern House with Pool", price: 220000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 12, title: "Seaside Apartment", price: 130000, location: "Alexandria, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 13, title: "Villa with Garden", price: 270000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 14, title: "Urban Loft", price: 110000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
    { id: 15, title: "Suburban House", price: 150000, location: "Giza, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 16, title: "Modern Villa", price: 300000, location: "Hurghada, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 17, title: "Compact Apartment", price: 70000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 18, title: "Family Villa", price: 240000, location: "Alexandria, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 19, title: "Luxury Penthouse Suite", price: 360000, location: "Cairo, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 20, title: "Cozy Countryside Cabin", price: 95000, location: "Sinai, Egypt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
  ];

  const [filtered, setFiltered] = useState(allProperties);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFiltered(allProperties.filter((p) => p.title.toLowerCase().includes(value)));
  };

  const addToFavourite = (property) => {
    const exists = favourites.find((p) => p.id === property.id);
    if (!exists) {
      setFavourites([...favourites, property]);
      toast.success(`${property.title} added to favourites ❤️`, { position: "top-right" });
    } else {
      toast.info(`${property.title} is already in favourites`, { position: "top-right" });
    }
  };

  return (
    <div className="properties-page">
      <h1 className="page-title">Explore Properties</h1>

      <input
        className="search-input"
        placeholder="Search properties..."
        value={search}
        onChange={handleSearch}
      />

      <div className="properties-grid">
        {filtered.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.title} />
            <div className="property-info">
              <h2>{property.title}</h2>
              <p className="location">{property.location}</p>
              <p className="price">${property.price}</p>

              <div className="card-buttons">
                <Link to={`/property/${property.id}`} className="details-btn">
                  View Details
                </Link>

                <button
  className="fav-btn"
  onClick={() => addToFavourite(property)}
>
  <FontAwesomeIcon
    icon={favourites.find((p) => p.id === property.id) ? solidHeart : regularHeart}
    size="1x"  
  />
</button>


              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
