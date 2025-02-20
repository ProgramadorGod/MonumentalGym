import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, video, alt, text, SideShowing }) => {

    

    return (
        <motion.div className="Card">
        {image ? <img className="CardImage" src={image} alt={alt} /> : null}
        {video ? (
            <video className="CardImage" src={video} autoPlay loop muted />
        ) : null}
        <div className="Line"></div>
        <div className="CardText">{text}</div>
        </motion.div>
    );
};

export default Card;
