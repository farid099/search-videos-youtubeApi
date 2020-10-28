import React, { useState,useEffect } from "react";

export default function SearchBox(props) {
  const [text ,setText] = useState('');

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    props.onSubmitHandler(text)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmitHandler}>
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={(e)=>setText(e.target.value)} className="prompt" type="text"></input>
          <i className="search icon"></i>
        </div>
      </div>
      </form>
    </div>
  );
}
