import React, { useState } from "react";

function SchoolEdit(props) {
  const [schoolDetails, setSchoolDetails] = useState(props.school);

  const changeHandler = event => {
    setSchoolDetails({...schoolDetails, [event.target.name]: event.target.value})
  }

  return (
    <div className="school-form">
      <h2>Editar Escuela</h2>
      <form>
        <div>
          <label for="name">Nombre:</label>
          <input className="col-6" type="text" id="name" name="name" placeholder="School Name" value={schoolDetails['name']} onChange={changeHandler} />
        </div>

        <div>
          <label for="address">Dirección:</label>
          <input className="col-6" type="text" id="address" name="address" placeholder="Address" value={schoolDetails['address']} onChange={changeHandler} />
        </div>

        <div>
          <label for="phone">Teléfono:</label>
          <input className="col-6" type="text" id="phone" name="phone" placeholder="(55) 5555-5555" value={schoolDetails['phone']} onChange={changeHandler} />
        </div>

        <input className="btn btn-primary" type="submit" id="submit" name="submit" value="Edit School" />
      </form>
    </div>
  )
}

export default SchoolEdit;
