import React, { Component } from 'react';

const Toolbar = (props) =>{
  let selectAllClass;
  if (props.allSelected) {
    selectAllClass = 'fa fa-check-square-o';
  } else if (props.someSelected) {
    selectAllClass = 'fa fa-minus-square-o';
  } else {
    selectAllClass = 'fa fa-square-o';
  }
  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>
        <button className="btn btn-default" onClick={props.selectAllToggle}>
          <i className={selectAllClass}></i>
        </button>

        <button className="btn btn-default">
          Mark As Read
        </button>

        <button className="btn btn-default">
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar;
