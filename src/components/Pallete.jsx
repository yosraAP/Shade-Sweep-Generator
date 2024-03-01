import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import randomColor from 'randomcolor'; // Assurez-vous d'avoir importé randomColor

const Palette = ({ onChange, name }) => {
  // Utilisez useState pour initialiser avec une couleur aléatoire
  const [color, setColor] = useState(randomColor());
  const inputRef = useRef(null);

  // Utilisez useEffect pour générer une nouvelle couleur aléatoire par défaut à chaque rechargement du composant
  useEffect(() => {
    setColor(randomColor());
  }, []);

  const circleStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'
  };

  const handleClick = () => {
    inputRef.current.click(); // Déclenche un clic sur l'élément input caché
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor); // Met à jour la couleur dans le state local
    // Appelle la fonction onChange passée en props, si nécessaire
    if(onChange) onChange({ target: { name, value: newColor } });
  };

  return (
    <div style={circleStyle} onClick={handleClick}>
      <input className='w-0 h-0'
        ref={inputRef}
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ 
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
       }}
      />
    </div>
  );
};

export default Palette;

Palette.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};
