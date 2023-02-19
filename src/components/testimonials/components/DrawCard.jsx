function DrawCard({ image }) {
  return (
    <div className="draw-card">
      <div className="draw-image">
        <img src={image} alt="Project 1" />
      </div>
    </div>
  );
}

export default DrawCard;