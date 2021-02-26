import React, { useState, useEffect } from "react";
import { getMembershipById } from './../../lib/api';
import { updateMembership } from './../../lib/api';


function MembershipEdit(props) {
  const [membership, setMembership] = useState({});

  const changeHandler = event => {
    let name = event.target.name
    let value = event.target.value
    setMembership({...membership, [name]: value})
  }
  function EditMembershipButton(){
    updateMembership(membership)
    console.log(membership)
  }

  useEffect(() => {
    getMembershipById(props.id, setMembership)
  }, []);
  
  console.log(membership)
  return (
    <div className="school-form col-12">
      <h2>Edit Membership</h2>
      <form data-memberid = {membership['id']}>
        <div>
          <label for="name">Nombre:</label>
          <input className="col-6" type="text" id="name" name="title_tier" placeholder="School Name" value={membership['title_tier']} onChange={changeHandler} />
        </div>

        <div>
          <label for="cost">Costo por alumno:</label>
          <input className="col-6" type="number" id="cost" name="price" placeholder="$30" value={membership['price']} onChange={changeHandler} />
        </div>

        <div>
          <label for="amount">Numero de alumnos (mínimo):</label>
          <input className="col-6" type="number" id="min_amount" name="min_amount" placeholder="250" value={membership['min_amount']} onChange={changeHandler} />
        </div>

        <div>
          <label for="amount">Numero de alumnos (máximo):</label>
          <input className="col-6" type="number" id="max_amount" name="max_amount" placeholder="250" value={membership['max_amount']} onChange={changeHandler} />
        </div>

        <div>
          <label for="phone">Duration:</label>
          <input className="col-6" type="number" id="duration" name="duration" placeholder="3 meses" value={membership['duration']} onChange={changeHandler} />
        </div>
        <div className="col-6">
          <input className="btn btn-primary" type="button" name="submit" value="Editar Membresía" onClick = {EditMembershipButton}/>
        </div>
      </form>
    </div>
  )
}

export default MembershipEdit;
