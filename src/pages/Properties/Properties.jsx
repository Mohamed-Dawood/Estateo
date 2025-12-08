import { useState } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useWishlist } from "../../context/WishlistContext";


export default function Properties() {
  const allProperties = [
    {
      id: 1,
      title: "Modern Family House",
      price: 120000,
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "A stylish modern home perfect for families.\nFeatures open living spaces and natural lighting.\nLocated in a peaceful Cairo neighborhood."
    },
    {
      id: 2,
      title: "Luxury Villa",
      price: 250000,
      location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      desc: "A premium villa offering luxury at every corner.\nSpacious rooms, private garden, and stunning architecture.\nPerfect for high-end living."
    },
    {
      id: 3,
      title: "Cozy Apartment",
      price: 80000,
      location: "Giza, Egypt",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q296eSUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "A warm and inviting apartment ideal for small families.\nEnjoy modern finishes and smart space usage.\nLocated near essential facilities."
    },
    {
      id: 4,
      title: "Beachside Villa",
      price: 300000,
      location: "Hurghada, Egypt",
      image: "https://images.unsplash.com/photo-1560946237-cab0777bc180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2hzaWRlJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      desc: "Wake up to ocean views every day.\nA luxurious villa steps away from the beach.\nPerfect for relaxation and seaside living."
    },
    {
      id: 5,
      title: "Downtown Apartment",
      price: 95000,
      location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1733274007142-d6750c8918c2?q=80&w=1079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q296eSUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Live in the heart of Cairo with everything around you.\nA modern apartment with sleek interiors.\nGreat for students and professionals."
    },
    {
      id: 6,
      title: "Modern Duplex",
      price: 180000,
      location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9kZXJuJTIwRHVwbGV4fGVufDB8fDB8fHww",
      desc: "A beautiful duplex combining comfort and elegance.\nFeatures wide living areas and modern design.\nSuitable for medium to large families."
    },
    {
      id: 7,
      title: "Family Townhouse",
      price: 140000,
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1596418139129-0726b7109974?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RnVhbWx5JTIwVG93bmhvdXNlfGVufDB8fDB8fHww",
      desc: "A spacious townhouse in a quiet residential area.\nOffers multiple rooms and a private outdoor space.\nDesigned for growing families."
    },
    {
      id: 8,
      title: "Mountain Cabin",
      price: 90000,
      location: "Sinai, Egypt",
      image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "A peaceful cabin surrounded by nature and mountains.\nIdeal for weekend getaways or simple living.\nCozy, warm, and full of charm."
    },
    {
      id: 9,
      title: "Luxury Penthouse",
      price: 350000,
      location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1733320822557-e4ccfb5f20d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwUGVudGhvdXNlfGVufDB8fDB8fHww",
      desc: "A stunning penthouse offering premium city views.\nHigh ceilings, elegant finishes, and top-class comfort.\nThe ultimate luxury lifestyle."
    },
    {
      id: 10,
      title: "Cozy Studio",
      price: 60000,
      location: "Giza, Egypt",
      image: "https://images.unsplash.com/photo-1537212013010-de9c76f8f0ae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "A compact studio perfect for students and solo residents.\nSmart layout with modern touches.\nAffordable and close to main services."
    },
    {
      id: 11,
      title: "Modern House with Pool",
      price: 220000,
      location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwSG91c2UlMjB3aXRoJTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "A beautifully designed home featuring a private pool.\nEnjoy luxury living with spacious rooms and natural light.\nPerfect for families."
    },
    {
      id: 12,
      title: "Seaside Apartment",
      price: 130000,
      location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1565053805884-2766c2fda174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFNlYXNpZGUlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      desc: "A bright apartment overlooking the sea.\nModern design with relaxing vibes.\nIdeal for coastal living lovers."
    },
    {
      id: 13,
      title: "Villa with Garden",
      price: 270000,
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1599932904184-02a07911e629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmlsbGElMjB3aXRoJTIwR2FyZGVufGVufDB8fDB8fHww",
      desc: "A spacious villa with a beautiful private garden.\nPerfect for families who enjoy outdoor space.\nElegant design and peaceful location."
    },
    {
      id: 14,
      title: "Urban Loft",
      price: 110000,
      location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1661964071594-0d5ea642833b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXJiYW4lMjBMb2Z0fGVufDB8fDB8fHww",
      desc: "A modern loft with high ceilings and industrial design.\nPerfect for young professionals.\nLocated in a lively urban area."
    },
    {
      id: 15,
      title: "Suburban House",
      price: 150000,
      location: "Giza, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1730500169170-a4253864a86f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3VidXJiYW4lMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      desc: "A quiet suburban home ideal for families.\nFeatures a calm atmosphere and spacious layout.\nClose to schools and daily needs."
    },
    {
      id: 16,
      title: "Modern Villa",
      price: 300000,
      location: "Hurghada, Egypt",
      image: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      desc: "A beautiful modern villa with high-end finishing.\nLocated near the Red Sea for a luxurious experience.\nOffers privacy and comfort."
    },
    {
      id: 17,
      title: "Compact Apartment",
      price: 70000,
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1639664701039-f747268e2243?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fENvbXBhY3QlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      desc: "A neat apartment perfect for small families or singles.\nModern layout with efficient space usage.\nLocated near transportation."
    },
    {
      id: 18,
      title: "Family Villa",
      price: 240000,
      location: "Alexandria, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1661751356300-c4756372be3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFtaWx5JTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      desc: "A warm family villa offering comfort and space.\nFeatures multiple bedrooms and a relaxing environment.\nGreat for long-term living."
    },
    {
      id: 19,
      title: "Luxury Penthouse Suite",
      price: 360000,
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1702411200201-3061d0eea802?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwUGVudGhvdXNlJTIwU3VpdGV8ZW58MHx8MHx8fDA%3D",
      desc: "An exceptional penthouse suite with panoramic city views.\nLuxury finishes and spacious interiors.\nPerfect for those seeking the ultimate urban lifestyle."
    },
    {
      id: 20,
      title: "Cozy Countryside Cabin",
      price: 95000,
      location: "Sinai, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1686090449933-2057b9fba09c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q296eSUyMENvdW50cnlzaWRlJTIwQ2FiaW58ZW58MHx8MHx8fDA%3D",
      desc: "A charming cabin in the countryside of Sinai.\nPerfect for nature lovers and weekend retreats.\nCozy interior with scenic outdoor surroundings."
    }
  ];
  

  const [filtered, setFiltered] = useState(allProperties);
  const [search, setSearch] = useState("");
  const { wishlist, addToWishlist } = useWishlist();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFiltered(allProperties.filter((p) => p.title.toLowerCase().includes(value)));
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
  {filtered.length === 0 ? (
    <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px", width: "100%" }}>
      No properties found 😔
    </p>
  ) : (
    filtered.map((property) => (
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
              onClick={() => addToWishlist(property)}
            >
              <FontAwesomeIcon
                icon={wishlist.find((p) => p.id === property.id) ? solidHeart : regularHeart}
                size="1x"
              />
            </button>
          </div>
        </div>
      </div>
    ))
  )}
</div>

      <ToastContainer />
    </div>
  );
}
