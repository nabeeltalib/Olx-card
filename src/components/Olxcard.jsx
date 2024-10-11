

const Olxcard = ({image, price, title, category, description, warrantyInfo }) => {
  return (
<>
<div className="card border border-secondary position-relative">
<span className="position-absolute fs-5 top-0 start-50 translate-middle badge rounded-pill bg-dark">
    {category}
  </span>
  <img src={image} className="card-img-top" style={{ height: '250px' }} alt="" />
  <div className="card-body border-top border-2 border-warning">
    <h5 className="card-title">$ {price}</h5>
    <p className="card-text fw-bold">{title}</p>
    <p>{description}</p>
    <p className="mb-0">{warrantyInfo}</p>
  </div>
</div>
</>
  );
}

export default Olxcard;