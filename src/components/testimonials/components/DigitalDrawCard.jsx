function DigitalDrawCard({ image, name }) {
  return (
    <div className="card text-bg-dark">
      <img src={image} className="card-img" alt={name} />
      <div className="card-img-overlay">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default DigitalDrawCard;