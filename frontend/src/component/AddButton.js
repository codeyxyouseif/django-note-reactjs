import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaBeer } from 'react-icons/fa'

const AddButton = () => {
  return <Link to='/note/new'>
      CREATE
  </Link>;
};

export default AddButton;
