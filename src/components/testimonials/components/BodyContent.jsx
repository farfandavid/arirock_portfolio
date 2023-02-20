function BodyContent({ title, models, artists, organizers, description, pics }) {
  return (
    <div className='bodypaint-content'>
      <div className='bodypaint-info'>
        <p className='bodypaint-name'>{title}</p>
        <p>Modelos: {models}</p>
        <p>Artistas: {artists}</p>
        <p>Organizador: {organizers}</p>
        <p>{description}</p>
      </div>
      <div className='bodypaint-gallery'>
        {
          pics.map(pic => (
            <img key={pic} src={pic} alt='body paint 1' />
          ))
        }
      </div>
    </div>
  );
}

export default BodyContent;