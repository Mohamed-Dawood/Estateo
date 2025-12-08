import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem("favourites");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });

    const addToWishlist = (property) => {
        const exists = wishlist.find((p) => p.id === property.id);
        let newWishlist;
        if (!exists) {
            newWishlist = [...wishlist, property];
            toast.success(`${property.title} added to favourites ❤️`, { position: "top-right" });
        } else {
            newWishlist = wishlist.filter((p) => p.id !== property.id);
            toast.info(`${property.title} removed from favourites`, { position: "top-right" });
        }
        setWishlist(newWishlist);
        localStorage.setItem("favourites", JSON.stringify(newWishlist));
    };

    const removeFromWishlist = (propertyId) => {
        const newWishlist = wishlist.filter((p) => p.id !== propertyId);
        setWishlist(newWishlist);
        localStorage.setItem("favourites", JSON.stringify(newWishlist));
    };

    const isInWishlist = (propertyId) => {
        return wishlist.some((p) => p.id === propertyId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}
