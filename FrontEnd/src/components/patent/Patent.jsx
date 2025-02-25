import React from "react";
import { Link } from 'react-router-dom'
import '../patent/CSS/StylePatent.css'

const Product = ({ patent }) => {
    return (
        <Link to={`/project/${patent._id}`}>
            <div className="patent-card">
                <img src={patent.images[0].url} className="patent-image" />
                <div key={patent._id} className="patent-content">
                    <h2 className="patent-title">{patent.name}</h2>
                    <p className="patent-description">{patent.category}</p>
                    <p className="patent-description">{patent.description}</p>
                    <button className="patent-info">Más Información</button>
                </div>
            </div>
        </Link>
    )
}

export default Product