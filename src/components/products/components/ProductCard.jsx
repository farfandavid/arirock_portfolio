function ProductCard({ name, details, colors, size, zone, image }) {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4 col-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 col-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text shirt-details">{details}</p>
            <div className="card-text shirt-color">Color: {colors.map(color => (
              <div
                key={name + color + 'product'}
                style={{ "backgroundColor": color }} >
              </div>
            ))}</div>
            <p className="card-text">Talla: {
              size.map(sizes => (
                <b key={name + 'sizes' + sizes} >{sizes} </b>
              ))
            } </p>
            <p className="card-text shirt-link-container">
              <a
                className="shirt-link"
                href={'https://api.whatsapp.com/send?phone=5493886652672&text=Hola+me+interesa+la+remera+de+' + name}
                target="_blank"
                rel="noreferrer noopener"
              ><i className="bi bi-whatsapp">Consultar</i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;