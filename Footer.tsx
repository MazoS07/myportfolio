import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={styles.container} className='mt-16 py-6 text-center bg-accent'>
      <FaRegCopyright style={styles.icon} />
      <span style={styles.text}>MazoS | All rights reserved 2024</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: 'white',
  },
  icon: {
    marginRight: '8px',
    fontSize: '16px',
  },
  text: {
    fontWeight: 'bold',
  },
};

export default Footer;
