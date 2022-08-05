import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";


const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

 const [text , setText] = useState('');


  //this method is used to dynamically update state whenever text input change in search form
  const onChange = (e) => setText( e.target.value );

  //this method is used to submit form
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a user name", "light");
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  
   
    return (
      <div>
        <form className='form' onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={text}
            onChange={onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {githubContext.users.length > 0 && (
          <button className='btn btn-light-btn-block' onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }



export default Search;
