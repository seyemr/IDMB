import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("")

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/results?search_query=${query}`);
    }
  };

  return (
    <header className="header p-4 d-flex justify-content-between">
      <Link to={'/'}>
        <img
          style={{ maxWidth: '100px', background: "black", }}
          src='https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/314/993/datas/original.png'
          alt="Logo"
          className="img-fluid"
        />
      </Link>
      <form className="rounded form-control  "
      style={{maxWidth: "350px"}}
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/results?search_query=${query}`);
        }}>
        <input type="text"
          className='input  py-1 rounded   align-items-center  '
          onChange={(e) => setQuery(e.target.value)}
          value={query} placeholder={"Search"} onKeyDown={handleKeyPress}
        />
        <Link to={`/results?search_query=${query}`} className='mr-2 btn'>
          <FiSearch className="text-dark fs-4 fw-bold" />
        </Link>
      </form>
      <FaBell className='mr-4' />
    </header>
  );
};

export default Header;
