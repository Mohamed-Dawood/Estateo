import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { Trash2 } from 'lucide-react';
import './Wishlist.css';

export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();

    if (wishlist.length === 0) {
        return (
            <div className="wishlist-page">
                <h1 className="page-title">My Wishlist</h1>
                <div className="empty-state">
                    <h2>No favourite properties yet.</h2>
                    <p>Start exploring and save your dream homes!</p>
                    <br />
                    <Link to="/properties" className="btn-explore">
                        Explore Properties
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <h1 className="page-title">My Wishlist</h1>

            <div className="wishlist-grid">
                {wishlist.map((property) => (
                    <div className="wishlist-card" key={property.id}>
                        <img src={property.image} alt={property.title} />
                        <div className="card-info">
                            <h2>{property.title}</h2>
                            <p className="location">{property.location}</p>
                            <p className="price">${property.price.toLocaleString()}</p>

                            <div className="card-actions">
                                <Link to={`/property/${property.id}`} className="btn-details">
                                    View Details
                                </Link>

                                <button
                                    className="btn-remove"
                                    onClick={() => removeFromWishlist(property.id)}
                                    title="Remove from wishlist"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
