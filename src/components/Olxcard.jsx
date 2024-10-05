

const Olxcard = ({image, price, title, location, day }) => {
  return (
<>
<div className="card" style={{ width: '25rem' }}>
  <img src={image} className="card-img-top" style={{ height: '250px' }} alt="" />
  <div className="card-body">
    <h5 className="card-title">{price}</h5>
    <p className="card-text pb-2">{title}</p>
    <p className="mb-0">{location}</p>
    <p className="mb-0">{day}</p>
  </div>
</div>
</>
  );
}

export default Olxcard;