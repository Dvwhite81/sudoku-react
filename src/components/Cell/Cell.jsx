import './Cell.css';

function Cell({ id, styles }) {
  return <div id={id} className="cell" style={styles} />;
}

export default Cell;
