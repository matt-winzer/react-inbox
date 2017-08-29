import React from 'react';

const Message = (props) => {
  let messageClass = 'row message'
  messageClass += props.message.read ? " read": " unread"
  messageClass += props.message.selected ? " selected": ""

  const labels = props.message.labels.map((label, i) => {
    return <span key={i} className="label label-warning">{label}</span>;
  })

  return (
    <div className={messageClass}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onClick={props.check.bind(null, props.message.id)} checked={props.message.selected}/>
          </div>
          <div className="col-xs-2">
            <i onClick={props.star.bind(null, props.message.id)}
               className={props.message.starred ? "star fa fa-star":"star fa fa-star-o"}>
            </i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labels}
        <a href="#">
          {props.message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message;
