import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const allProperties = [
    { 
      id: 1, 
      title: "Modern Family House", 
      price: 120000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", 
      description: "Spacious modern family house with a bright living area. Perfect for families looking for comfort and convenience. Comes with a backyard and modern kitchen.",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      type: "House"
    },
    { 
      id: 2, 
      title: "Luxury Villa", 
      price: 250000, 
      location: "Alexandria, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Elegant luxury villa with a private pool and lush garden. Includes 5 bedrooms and 4 bathrooms. Perfect for those who value privacy and comfort.",
      bedrooms: 5,
      bathrooms: 4,
      area: 400,
      type: "Villa"
    },
    { 
      id: 3, 
      title: "Cozy Apartment", 
      price: 80000, 
      location: "Giza, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "A small, cozy apartment ideal for young couples or singles. Bright and airy rooms with modern finishes. Conveniently located near shops and cafes.",
      bedrooms: 2,
      bathrooms: 1,
      area: 90,
      type: "Apartment"
    },
    { 
      id: 4, 
      title: "Beachside Villa", 
      price: 300000, 
      location: "Hurghada, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Beautiful villa with direct beach access. Spacious interiors with 4 bedrooms and 3 bathrooms. Ideal for summer retreats and family vacations.",
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: "Villa"
    },
    { 
      id: 5, 
      title: "Downtown Apartment", 
      price: 95000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Modern apartment in the heart of the city. 2 bedrooms and 2 bathrooms with ample natural light. Close to cafes, shops, and public transport.",
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      type: "Apartment"
    },
    { 
      id: 6, 
      title: "Modern Duplex", 
      price: 180000, 
      location: "Alexandria, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Spacious duplex with modern interiors. 3 bedrooms and 3 bathrooms, ideal for families. Features an open-plan living area and private balcony.",
      bedrooms: 3,
      bathrooms: 3,
      area: 220,
      type: "Duplex"
    },
    { 
      id: 7, 
      title: "Family Townhouse", 
      price: 140000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Charming townhouse suitable for large families. 4 bedrooms and 3 bathrooms with garden space. Located in a peaceful residential area.",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      type: "Townhouse"
    },
    { 
      id: 8, 
      title: "Mountain Cabin", 
      price: 90000, 
      location: "Sinai, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Cozy cabin with stunning mountain views. 2 bedrooms and 1 bathroom, perfect for weekend getaways. Surrounded by nature for peaceful living.",
      bedrooms: 2,
      bathrooms: 1,
      area: 100,
      type: "Cabin"
    },
    { 
      id: 9, 
      title: "Luxury Penthouse", 
      price: 350000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Top-floor penthouse with panoramic city views. 5 bedrooms and 4 bathrooms. Features luxury finishes and large terraces.",
      bedrooms: 5,
      bathrooms: 4,
      area: 400,
      type: "Penthouse"
    },
    { 
      id: 10, 
      title: "Cozy Studio", 
      price: 60000, 
      location: "Giza, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Compact studio ideal for singles. 1 bedroom and 1 bathroom with smart layout. Convenient city location with easy access to amenities.",
      bedrooms: 1,
      bathrooms: 1,
      area: 50,
      type: "Studio"
    },
    { 
      id: 11, 
      title: "Modern House with Pool", 
      price: 220000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Modern house with private pool and spacious rooms. 4 bedrooms and 3 bathrooms. Ideal for family living and entertaining guests.",
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      type: "House"
    },
    { 
      id: 12, 
      title: "Seaside Apartment", 
      price: 130000, 
      location: "Alexandria, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Bright seaside apartment with stunning views. 3 bedrooms and 2 bathrooms. Perfect for enjoying a relaxed coastal lifestyle.",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      type: "Apartment"
    },
    { 
      id: 13, 
      title: "Villa with Garden", 
      price: 270000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Elegant villa with a spacious garden and outdoor space. 5 bedrooms and 4 bathrooms. Perfect for family gatherings and entertainment.",
      bedrooms: 5,
      bathrooms: 4,
      area: 380,
      type: "Villa"
    },
    { 
      id: 14, 
      title: "Urban Loft", 
      price: 110000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      description: "Modern urban loft with open-plan living area. 2 bedrooms and 2 bathrooms. Located in the city center close to nightlife and cafes.",
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      type: "Loft"
    },
    { 
      id: 15, 
      title: "Suburban House", 
      price: 150000, 
      location: "Giza, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Comfortable suburban house with 3 bedrooms and 2 bathrooms. Quiet neighborhood with parks and schools nearby. Perfect for family life.",
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
      type: "House"
    },
    { 
      id: 16, 
      title: "Modern Villa", 
      price: 300000, 
      location: "Hurghada, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Luxury modern villa with 4 bedrooms and 3 bathrooms. Includes a private pool and terrace with sea view. Ideal for luxurious living.",
      bedrooms: 4,
      bathrooms: 3,
      area: 360,
      type: "Villa"
    },
    { 
      id: 17, 
      title: "Compact Apartment", 
      price: 70000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Small but smartly designed apartment. 1 bedroom and 1 bathroom. Perfect for singles or couples looking for a city lifestyle.",
      bedrooms: 1,
      bathrooms: 1,
      area: 55,
      type: "Apartment"
    },
    { 
      id: 18, 
      title: "Family Villa", 
      price: 240000, 
      location: "Alexandria, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Spacious family villa with 4 bedrooms and 3 bathrooms. Includes a garden and garage. Ideal for a comfortable family life.",
      bedrooms: 4,
      bathrooms: 3,
      area: 320,
      type: "Villa"
    },
    { 
      id: 19, 
      title: "Luxury Penthouse Suite", 
      price: 360000, 
      location: "Cairo, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Exclusive penthouse suite with 5 bedrooms and 4 bathrooms. Panoramic city views and luxury interiors. Perfect for high-end living.",
      bedrooms: 5,
      bathrooms: 4,
      area: 420,
      type: "Penthouse"
    },
    { 
      id: 20, 
      title: "Cozy Countryside Cabin", 
      price: 95000, 
      location: "Sinai, Egypt", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Quiet countryside cabin with 2 bedrooms and 1 bathroom. Ideal for weekend getaways and nature lovers. Surrounded by beautiful landscapes.",
      bedrooms: 2,
      bathrooms: 1,
      area: 95,
      type: "Cabin"
    }
  ];
  
  
  

  useEffect(() => {
    const found = allProperties.find((p) => p.id === parseInt(id));
    setProperty(found);
  }, [id]);

  if (!property) return <h2 style={{ padding: "50px" }}>Loading...</h2>;

  return (
    <div className="details-page">
      <Link to="/properties" className="back-btn">
        ← Back to Properties
      </Link>

      <div className="details-container">
        <img className="details-image" src={property.image} alt={property.title} />

        <div className="details-info">
          <h1>{property.title}</h1>
          <p className="d-location">{property.location}</p>
          <p className="d-price">${property.price}</p>

          <ul className="features">
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Area: {property.area} m²</li>
            <li>Type: {property.type}</li>
          </ul>

          <p className="description">{property.description}</p>

          <div className="cta-row">
            <button className="btn-primary">Book a Visit</button>
            <button
              className="btn-secondary"
              onClick={() => {
                const prev = JSON.parse(localStorage.getItem("favourites")) || [];
                const exists = prev.find((p) => p.id === property.id);
                if (!exists) {
                  localStorage.setItem("favourites", JSON.stringify([...prev, property]));
                  alert("Added to favourites ❤️");
                } else {
                  alert("Already in favourites");
                }
              }}
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
