import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import styled from 'styled-components';
import { useState } from 'react';
import PictureModal from './PictureModal';

const GaleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
    padding: 1em;
    justify-content: center;
`;

const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    font-weight: 300;
`;

const Caption = styled.h6`
    font-size: 1em;
    font-weight: 500;
`;


function Galery({ pictures }) {

    const [isModalShown, showModal] = useState(false);
    const [modalPicture, setModalPicture] = useState({});

    const onCloseModal = (e) => {
        console.log(e);
        showModal(false);
    }

    const onOpenModal = (picture) => {
        console.log('Picture:', picture.url);
        setModalPicture(picture);
        showModal(true);
    }

    return (
        <GaleryContainer>
            {isModalShown && <PictureModal isOpen={isModalShown} picture={modalPicture} onClose={onCloseModal} onOpen={onOpenModal} /> }
            {
                pictures.map((picture, index) => (
                    <>
                        <PictureContainer key={index}>
                            <img onClick={() => onOpenModal(picture)} style={{width:"100%"}} src={picture.url} alt={picture.caption} />
                            <Caption className='montserrat'>{picture.caption}</Caption>
                        </PictureContainer>
                    </>
                ))
            }
        </GaleryContainer>
    );
}

export default Galery;