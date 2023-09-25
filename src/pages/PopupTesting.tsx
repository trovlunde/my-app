import "./PopupTesting.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Ascii from "./ASCII/Ascii";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function PopupTesting() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value); // Update selected value when dropdown changes
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting
    closeModal(); // Close the modal on form submission (you can customize this behavior)
    // Do something with the selected value (e.g., send it to an API, update state, etc.)
    console.log('Selected Value:', selectedValue);
  };

  let subtitle: HTMLHeadingElement | null = null;

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <form onSubmit={handleFormSubmit}>
          <label>
            Select an option:
            <select value={selectedValue} onChange={handleDropdownChange}>
              <optgroup label="Cool Group">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </optgroup>
              <optgroup label="Lame Group">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </optgroup>
            </select>
          </label>
          <input type="text" value={selectedValue} readOnly />
          <button type="submit">Submit</button>
        </form>
      </Modal>
      <Ascii></Ascii>
    </div>
  );
}

export default PopupTesting;
