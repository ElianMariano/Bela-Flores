import React, { ImgHTMLAttributes } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

// Link: image, url: product
interface ImageItemProps {
    link: string;
    hasLink: boolean;
    url?: string;
    description: string;
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

const ImageItem: React.FC<ImageItemProps> = ({ link, hasLink, url, description }) => {
    if (hasLink){
        return (
            <Link to={String(url)}>
                <Image alt={description} src={link} />
            </Link>
        )
    }
    else{
        return <Image alt={description} src={link} />;
    }
;}

export default ImageItem;