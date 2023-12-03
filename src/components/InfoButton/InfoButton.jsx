function InfoButton({ name, src, game, func }) {
  const label = name.toUpperCase();

  return (
    <div id={`${name}-div`} className="info-btn-div">
      <button
        id={`${name}-btn`}
        className="info-btn"
        type="submit"
        onClick={() => func(game)}
      >
        <img
          id={`${name}-img`}
          className="info-img"
          src={src}
          alt={`${name}-button`}
        />
      </button>
      <h4>{label}</h4>
    </div>
  );
}

export default InfoButton;
