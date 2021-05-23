import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Upload} from 'react-feather'

import './styles.css'

interface Props{
    onFileUploaded: (file: File) => void;
}

const  Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className='dropzone' {...getRootProps()}>
        <input {...getInputProps()} accept='image/*' />

        { selectedFileUrl 
            ? <img src={selectedFileUrl} alt='Imagem do Produto' />
            : (
                <p>
                    <Upload color='green' size={20} />
                    Imagem do Produto 
                </p>
            )
        }
    </div>
  );
}

export default Dropzone;