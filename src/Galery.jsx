import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import styled from 'styled-components';

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

    return (
        <GaleryContainer>
            {
                pictures.map((picture, index) => (
                    <PictureContainer key={index}>
                        <img style={{width:"100%"}} src={picture.url} alt={picture.caption} />
                        <Caption className='montserrat'>{picture.caption}</Caption>
                    </PictureContainer>
                ))
            }
        </GaleryContainer>
    );
}

export default Galery;