import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const Index = () => {
  const [espInput, setEspInput] = useState('');
  const [classInput, setClassInput] = useState('');
  const [metierInput, setMetierInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Esp: espInput, Class: classInput, Metier: metierInput }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate image');
      }

      const { imageUrl } = await res.json();
      setImageUrl(imageUrl); // Set the imageUrl received from generate.js
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
      <div>
        <h1>Generate Image from JSON</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Espèce:</label>
            <input
                type="text"
                value={espInput}
                onChange={(e) => setEspInput(e.target.value)}
            />
          </div>
          <div>
            <label>Classe:</label>
            <input
                type="text"
                value={classInput}
                onChange={(e) => setClassInput(e.target.value)}
            />
          </div>
          <div>
            <label>Métier:</label>
            <input
                type="text"
                value={metierInput}
                onChange={(e) => setMetierInput(e.target.value)}
            />
          </div>
          <button type="submit">Generate Image</button>
        </form>
        {imageUrl && (
            <div style={{ marginTop: '20px' }}>
              <h2>Generated Image Link</h2>
              <p>Click <a href={imageUrl} target="_blank" rel="noopener noreferrer">here</a> to view the generated image.</p>
            </div>
        )}
      </div>
  );
};

export default Index;

