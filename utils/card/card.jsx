import Image from 'next/image'
import "./card.css"

const Card = ({ image, cardtitle, discription }) => {
  return (
    <div className="card-container">
      <div className="card-media">
        <Image src={image} alt={cardtitle} />
      </div>
      <div className='card-title'>
        <h1>{cardtitle}</h1>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default Card