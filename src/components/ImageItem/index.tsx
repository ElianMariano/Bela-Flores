import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

// interface ImageItemProps {
//     url: string;
// };

interface ImageItemProps extends ImgHTMLAttributes<HTMLImageElement> {
    url: string;
};

const Image = styled.img`
    width: 100%;
    border-radius: 3px;
    border-width: 2px;
    border-color: var(--color-primary);
`;

const ImageWrapper = styled.a`
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    text-align: center;
`;

const ImageItem: React.FC<ImageItemProps> = ({ url, ...rest }) => {
    return (
        <ImageWrapper href={url}>
            <Image {...rest} />
        </ImageWrapper>
    );
;}

// function ImageItem(props: ImageItemProps){
//     return (
//         <a href={props.url}>
//             <Image />
//         </a>
//     );
// }

export default ImageItem;