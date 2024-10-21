import React, { useState } from 'react';
import Modal from 'react-modal';
import './Suspects.css';
import Container from "../../Components/Container";
import { contacts } from "./const";

Modal.setAppElement('#root');

const Suspects = () => {
  const [flipped, setFlipped] = useState(Array(20).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFlip = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true); // Открыть модальное окно
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === contacts[currentIndex].password) {
      setFlipped(flipped.map((flip, i) => (i === currentIndex ? !flip : flip)));
      setIsModalOpen(false); // Закрыть модальное окно
      setPasswordInput(''); // Очистить ввод
      setErrorMessage(''); // Очистить сообщение об ошибке
    } else {
      setErrorMessage('Неверный пароль!'); // Показать ошибку
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasswordInput('');
    setErrorMessage('');
  };

  return (
   <Container>
     <h1 className="title">Suspects and Witnesses</h1>
     <div className="contacts-list">
       {contacts.map((contact, index) => (
        <div
         className={`contact-card ${flipped[index] ? 'flipped' : ''}`}
         key={index}
         onClick={() => handleFlip(index)}
        >
          <div className="contact-card-front">
            <h3>{contact.name}</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Age:</strong> {contact.age}</p>
            <p><strong>City:</strong> {contact.city}</p>
          </div>
          <div className="contact-card-back">
            <p>{contact.info}</p>
          </div>
        </div>
       ))}
     </div>

     <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Password Modal"
      className="modal"
      overlayClassName="modal-overlay"
     >
       <h2>Введите пароль для доступа</h2>
       <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Введите пароль"
       />
       {errorMessage && <p className="error-message">{errorMessage}</p>}
       <button onClick={handlePasswordSubmit}>Подтвердить</button>
       <button onClick={closeModal}>Отмена</button>
     </Modal>
   </Container>
);
};

export default Suspects;