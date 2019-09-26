import React, {useState} from 'react';
import { CardImg } from 'reactstrap';
import './UserItem.css';

function handler(userId) {

  alert(`Cat: ${userId}`);
}

function UserItem(props) {
  const [selected, setSelected] = useState(false);

  return (
    <tr onClick={() => setSelected(!selected)} className={selected ? "selected" : ""}>
      <td><CardImg className="img-thumb"
     src={props.url}
     alt="foto"/></td>
      <td className="name">{props.name}</td>
      <td><button onClick={()=>handler(props.id)}>Submit</button></td>
    </tr>
  );
}

export default UserItem;
