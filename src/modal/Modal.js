import React from 'react';
import { useSelector } from 'react-redux';
import './Modal.scss';

function Modal() {
    const show = useSelector((store) => store.setusers.modal);
    const message = useSelector((store) => store.setusers.message);

    const showHideClassName = show ? 'modalfact--block' : 'modalfact--none';

    return (
        <div className={showHideClassName}>
            <div className="mainmodal">
                <div class="modal-content">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;