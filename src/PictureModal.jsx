import React, { useRef } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    display: block;
    position: fixed;
    z-index: 101;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    position: relative;
`;

const Close = styled.span`
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
`;

const Picture = styled.img`
    width: 100%;
    height: auto;
`;

const Caption = styled.div`
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 10px 0;
`;

const PictureModal = ({ picture, onClose, onOpen }) => {
    const modalEl = useRef(null);

    const handleModalClick = (e) => {
        if (modalEl.current && !modalEl.current.contains(e.target)) {
            onClose(e);
        }
    };


    return (
        <Modal onClick={handleModalClick}>
            <ModalContent ref={modalEl} onClick={(e) => e.stopPropagation()}>
                <Picture src={picture.url} alt={picture.caption} />
                <Caption>{picture.caption}</Caption>
            </ModalContent>
        </Modal>
    );
}

export default PictureModal;