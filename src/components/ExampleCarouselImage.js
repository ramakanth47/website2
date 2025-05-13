// import React from 'react';
// import PropTypes from 'prop-types';
 
// function ExampleCarouselImage({ text }) {
//   return (
//     <div style={{ width: '100%', height: '300px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <img src={skilllibary} alt='skill'/>
//       <h2>{text}</h2>
//     </div>
//   );
// }

// ExampleCarouselImage.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// export default ExampleCarouselImage;
import React from 'react';
import PropTypes from 'prop-types';
 
function ExampleCarouselImage({ src, alt }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <img 
        src={src} 
        alt={alt} 
        style={{ width: 550, height: 300, objectFit: 'cover', marginLeft: 'auto', marginRight: 'auto' }} 
      />
    </div>

  );
}

ExampleCarouselImage.propTypes = {
    src: 'default-image-url.jpg',
     alt: 'Default Image',

};

export default ExampleCarouselImage;