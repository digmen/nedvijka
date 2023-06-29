import React from 'react';
import './Fab.css';
import { IoMdChatboxes } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const Fab = () => {
  return (
    <div className="adminActions">
      <input type="checkbox" name="adminToggle" className="adminToggle" />
      <a className="adminButton" href="#!">
        <i>
          <IoMdChatboxes />
        </i>
      </a>
      <div className="adminButtons">
        <a href="tel:+996000000001" title="Add Company">
          <i className="fa fa-building">
            <FiPhoneCall />
          </i>
        </a>
        <a href="https://www.instagram.com" title="Add User">
          <i className="fa fa-user-plus">
            <AiOutlineInstagram size={25} />
          </i>
        </a>
        <a href="https://www.whatsapp.com" title="Edit User">
          <i className="fa fa-user-edit">
            <BsWhatsapp size={25} />
          </i>
        </a>
      </div>
    </div>
  );
};
export default Fab;
