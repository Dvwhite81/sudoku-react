function Number({ i, setCurrentNumber }) {
  const handleNumberClick = (e) => {
    const number = parseInt(e.target.textContent, 10);
    console.log('numberClick number:', number);
    setCurrentNumber(number);
  };

  return (
    <div key={i} className="number-div">
      <button
        id={`number-${i}`}
        className="number-btn"
        type="button"
        onClick={handleNumberClick}
      >
        {i}
      </button>
    </div>
  );
}

export default Number;
