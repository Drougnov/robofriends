import { useState } from "react";

const Card = ({ id, name, email }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <li className="card">
        <div className="card__img">
            {loading && <div className="card__img-placeholder">Loading...</div>}
            <img
            src={`https://robohash.org/${id}?size=200x200`}
            alt={`${name}'s portrait`}
            onLoad={handleImageLoad}
            style={{ display: loading ? "none" : "block" }}
            />
        </div>
        <section className="card__text">
            <h2 className="card__text-header">{name}</h2>
            <a className="card__text-link" href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
            </a>
        </section>
        </li>
    );
};

export default Card;