import React from 'react';
import OptionModal from './OptionModal';

const ConfirmModal = ({ submitHomeContent, ...props }) => {

  const modalStyling = {
    container: {
      backgroundColor: 'var(--secondary-color)'
    },
    title: {
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: 'var(--dashboard-color)',
      display: 'flex',
      gap: 10,
      color: 'var(--secondary-color)',
      alignItems: 'center'
    },
  };

  return (
    <div className="modal fade" id="targetHomeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={modalStyling.container}>
          <div className="modal-header">
            <h5 className="modal-title title-font" style={modalStyling.title} id="staticBackdropLabel">Vahvista (Etusivu)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <OptionModal submitHomeContent={submitHomeContent} value={props.value} valueTarget={props.valueTarget} styling={modalStyling.button} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;