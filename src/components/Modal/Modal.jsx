import './Modal.css';

function Modal({ message, setMessage }) {
  const closeModal = () => {
    setMessage(null);
  };

  const styles = message === null ? { display: 'none' } : { display: 'flex' };

  return (
    <div id="myModal" style={styles}>
      <span id="close-modal" onClick={closeModal}>
        ×
      </span>
      <div id="modal-content">
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default Modal;
