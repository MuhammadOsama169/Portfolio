import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Gif from '../assets/influencer.gif'
import SocialMediaIcons from './SocialMediaIcons';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#181D31',
  color: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ openModal, closeModal }) => {
  
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center items-center">
            <img alt='GifHappy' src={Gif}  className="max-h-[300px]"/>
          </div>

          <div className="flex flex-col p-3 ">
            <p className="font-playfair text-3xl text-center"> <span className="text-blue">Thank you</span> for going this far!. Now take the last step and <span className="text-[#FF165D] font-semibold">Reach me out!</span></p>
            <button  className="bg-[#FF165D] text-white rounded-sm py-5 px-7 mt-5 font-semibold
              hover:bg-deep-blue hover:text-white transition duration-500 ">
              m.osama169@gmail.com
            </button>
            <button className="bg-blue text-white rounded-sm py-5 px-7 font-semibold
              hover:bg-deep-blue hover:text-white transition duration-500 ">
            +966-53-2416314
            </button>
          </div>
          <div className="flex items-center justify-center border-solid">
            <SocialMediaIcons/>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
BasicModal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.bool,
};