import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import Button from './Button';

const FileInputContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const FileInput = ({ id, onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        alert('Please select an image file.');
      } else {
        const file = acceptedFiles[0];
        if (file && file.type.includes('image/')) {
          onChange(file);
          setSelectedImage(URL.createObjectURL(file));
        } else {
          alert('Please select an image file.');
        }
      }
    },
  });

  return (
    <div>
      {selectedImage ? (
        <ImageContainer>
          <PreviewImage src={selectedImage} alt="Selected Image" />
        </ImageContainer>
      ) : (
        <div {...getRootProps()}>
          <input id={id} {...getInputProps()} />
          <FileInputContainer>
            <p>
              {isDragActive
                ? 'Drop the image here'
                : 'Drag and drop an image here, or click to select an image'}
            </p>
          </FileInputContainer>
        </div>
      )}
    </div>
  );
};

export default FileInput;
