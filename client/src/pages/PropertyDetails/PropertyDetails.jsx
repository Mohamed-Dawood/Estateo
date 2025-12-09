import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PropertyDetails.css";
import { useWishlist } from "../../context/WishlistContext";

export default function PropertyDetails() {
  const { id } = useParams();
  const { addToWishlist, wishlist } = useWishlist();
  const [property, setProperty] = useState(null);

   const allProperties = [
    { id: 1, title: "Modern Family House", price: 120000, location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0?auto=format&fit=crop&w=800&q=80",
      desc: "A stylish modern home perfect for families.\nFeatures open living spaces and natural lighting.\nLocated in a peaceful Cairo neighborhood.",
      bedrooms: 4, bathrooms: 3, area: 250, type: "House"
    },
    { id: 2, title: "Luxury Villa", price: 250000, location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=60",
      desc: "A premium villa offering luxury at every corner.\nSpacious rooms, private garden, and stunning architecture.\nPerfect for high-end living.",
      bedrooms: 5, bathrooms: 4, area: 400, type: "Villa"
    },
    { id: 3, title: "Cozy Apartment", price: 80000, location: "Giza, Egypt",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60",
      desc: "A warm and inviting apartment ideal for small families.\nEnjoy modern finishes and smart space usage.\nLocated near essential facilities.",
      bedrooms: 2, bathrooms: 1, area: 90, type: "Apartment"
    },
    { id: 4, title: "Beachside Villa", price: 300000, location: "Hurghada, Egypt",
      image: "https://images.unsplash.com/photo-1560946237-cab0777bc180?w=600&auto=format&fit=crop&q=60",
      desc: "Wake up to ocean views every day.\nA luxurious villa steps away from the beach.\nPerfect for relaxation and seaside living.",
      bedrooms: 5, bathrooms: 4, area: 350, type: "Villa"
    },
    { id: 5, title: "Downtown Apartment", price: 95000, location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1733274007142-d6750c8918c2?q=80&w=1079&auto=format&fit=crop",
      desc: "Live in the heart of Cairo with everything around you.\nA modern apartment with sleek interiors.\nGreat for students and professionals.",
      bedrooms: 3, bathrooms: 2, area: 120, type: "Apartment"
    },
    { id: 6, title: "Modern Duplex", price: 180000, location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=600&auto=format&fit=crop&q=60",
      desc: "A beautiful duplex combining comfort and elegance.\nFeatures wide living areas and modern design.\nSuitable for medium to large families.",
      bedrooms: 4, bathrooms: 3, area: 200, type: "Duplex"
    },
    { id: 7, title: "Family Townhouse", price: 140000, location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1596418139129-0726b7109974?q=80&w=1167&auto=format&fit=crop",
      desc: "A spacious townhouse in a quiet residential area.\nOffers multiple rooms and a private outdoor space.\nDesigned for growing families.",
      bedrooms: 4, bathrooms: 3, area: 180, type: "Townhouse"
    },
    { id: 8, title: "Mountain Cabin", price: 90000, location: "Sinai, Egypt",
      image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&auto=format&fit=crop&q=60",
      desc: "A peaceful cabin surrounded by nature and mountains.\nIdeal for weekend getaways or simple living.\nCozy, warm, and full of charm.",
      bedrooms: 2, bathrooms: 1, area: 80, type: "Cabin"
    },
    { id: 9, title: "Luxury Penthouse", price: 350000, location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1733320822557-e4ccfb5f20d1?w=600&auto=format&fit=crop&q=60",
      desc: "A stunning penthouse offering premium city views.\nHigh ceilings, elegant finishes, and top-class comfort.\nThe ultimate luxury lifestyle.",
      bedrooms: 4, bathrooms: 3, area: 300, type: "Penthouse"
    },
    { id: 10, title: "Cozy Studio", price: 60000, location: "Giza, Egypt",
      image: "https://images.unsplash.com/photo-1537212013010-de9c76f8f0ae?q=80&w=735&auto=format&fit=crop",
      desc: "A compact studio perfect for students and solo residents.\nSmart layout with modern touches.\nAffordable and close to main services.",
      bedrooms: 1, bathrooms: 1, area: 45, type: "Studio"
    },
    { id: 11, title: "Modern House with Pool", price: 220000, location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=600&auto=format&fit=crop&q=60",
      desc: "A beautifully designed home featuring a private pool.\nEnjoy luxury living with spacious rooms and natural light.\nPerfect for families.",
      bedrooms: 4, bathrooms: 3, area: 270, type: "House"
    },
    { id: 12, title: "Seaside Apartment", price: 130000, location: "Alexandria, Egypt",
      image: "https://images.unsplash.com/photo-1565053805884-2766c2fda174?w=600&auto=format&fit=crop&q=60",
      desc: "A bright apartment overlooking the sea.\nModern design with relaxing vibes.\nIdeal for coastal living lovers.",
      bedrooms: 3, bathrooms: 2, area: 110, type: "Apartment"
    },
    { id: 13, title: "Villa with Garden", price: 270000, location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1599932904184-02a07911e629?w=600&auto=format&fit=crop&q=60",
      desc: "A spacious villa with a beautiful private garden.\nPerfect for families who enjoy outdoor space.\nElegant design and peaceful location.",
      bedrooms: 5, bathrooms: 4, area: 350, type: "Villa"
    },
    { id: 14, title: "Urban Loft", price: 110000, location: "Cairo, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1661964071594-0d5ea642833b?w=600&auto=format&fit=crop&q=60",
      desc: "A modern loft with high ceilings and industrial design.\nPerfect for young professionals.\nLocated in a lively urban area.",
      bedrooms: 2, bathrooms: 1, area: 75, type: "Loft"
    },
    { id: 15, title: "Suburban House", price: 150000, location: "Giza, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1730500169170-a4253864a86f?w=600&auto=format&fit=crop&q=60",
      desc: "A quiet suburban home ideal for families.\nFeatures a calm atmosphere and spacious layout.\nClose to schools and daily needs.",
      bedrooms: 3, bathrooms: 2, area: 140, type: "House"
    },
    { id: 16, title: "Modern Villa", price: 300000, location: "Hurghada, Egypt",
      image: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?w=600&auto=format&fit=crop&q=60",
      desc: "A beautiful modern villa with high-end finishing.\nLocated near the Red Sea for a luxurious experience.\nOffers privacy and comfort.",
      bedrooms: 5, bathrooms: 4, area: 380, type: "Villa"
    },
    { id: 17, title: "Compact Apartment", price: 70000, location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1639664701039-f747268e2243?w=600&auto=format&fit=crop&q=60",
      desc: "A neat apartment perfect for small families or singles.\nModern layout with efficient space usage.\nLocated near transportation.",
      bedrooms: 2, bathrooms: 1, area: 65, type: "Apartment"
    },
    { id: 18, title: "Family Villa", price: 240000, location: "Alexandria, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1661751356300-c4756372be3b?w=600&auto=format&fit=crop&q=60",
      desc: "A warm family villa offering comfort and space.\nFeatures multiple bedrooms and a relaxing environment.\nGreat for long-term living.",
      bedrooms: 4, bathrooms: 3, area: 300, type: "Villa"
    },
    { id: 19, title: "Luxury Penthouse Suite", price: 360000, location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1702411200201-3061d0eea802?w=600&auto=format&fit=crop&q=60",
      desc: "An exceptional penthouse suite with panoramic city views.\nLuxury finishes and spacious interiors.\nPerfect for those seeking the ultimate urban lifestyle.",
      bedrooms: 4, bathrooms: 3, area: 320, type: "Penthouse"
    },
    { id: 20, title: "Cozy Countryside Cabin", price: 95000, location: "Sinai, Egypt",
      image: "https://plus.unsplash.com/premium_photo-1686090449933-2057b9fba09c?w=600&auto=format&fit=crop&q=60",
      desc: "A charming cabin in the countryside of Sinai.\nPerfect for nature lovers and weekend retreats.\nCozy interior with scenic outdoor surroundings.",
      bedrooms: 2, bathrooms: 1, area: 70, type: "Cabin"
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

          <p className="description">{property.desc}</p>

          <div className="cta-row">
          <Link to="/contact" className="btn-primary ">
              Book a Visit
          </Link>
            <button
              className="btn-secondary"
              onClick={() => addToWishlist(property)}
            >
              {wishlist.some(p => p.id === property.id) ? "Remove from Favourite" : "Add to Favourite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
