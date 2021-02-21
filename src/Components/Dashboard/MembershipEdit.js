import React, { useState } from "react";

function MembershipEdit(props) {
  const [membershipDetails, setMembershipDetails] = useState(props.membership);

  const changeHandler = event => {
    setMembershipDetails({...membershipDetails, [event.target.name]: event.target.value})
  }

  return (
    <div className="school-form">
      <h2>Edit Membership</h2>
      <form>
        <div>
          <label for="name">Nombre:</label>
          <input className="col-6" type="text" id="name" name="name" placeholder="School Name" value={membershipDetails['name']} onChange={changeHandler} />
        </div>

        <div>
          <label for="cost">Costo por alumno:</label>
          <input className="col-6" type="text" id="cost" name="cost" placeholder="$30" value={membershipDetails['cost']} onChange={changeHandler} />
        </div>

        <div>
          <label for="amount">Numero de alumnos:</label>
          <input className="col-6" type="text" id="amount" name="amount" placeholder="250" value={membershipDetails['amount']} onChange={changeHandler} />
        </div>

        <div>
          <label for="phone">Duration:</label>
          <input className="col-6" type="text" id="duration" name="duration" placeholder="3 meses" value={membershipDetails['duration']} onChange={changeHandler} />
        </div>

        <input className="btn btn-primary" type="submit" id="submit" name="submit" value="Edit School" />
      </form>
    </div>
  )
}

export default MembershipEdit;
