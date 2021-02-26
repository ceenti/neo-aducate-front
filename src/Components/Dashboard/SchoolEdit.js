import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import {updateSchool} from './../../lib/api';
import {getSchoolById} from './../../lib/api';

function SchoolEdit(props) {
  const [schoolDetails, setSchoolDetails] = useState({});

  const changeHandler = event => {
    setSchoolDetails({...schoolDetails, [event.target.name]: event.target.value})
  }

  function onClickHandler(){
    console.log(schoolDetails)
    updateSchool(schoolDetails)
  }

  useEffect(() => {
    getSchoolById(props.id, setSchoolDetails)
  }, []);

  return (
    <div className="school-form">
      <h2>Editar Escuela</h2>
      <form>
        <div>
          <label for="name">Nombre:</label>
          <input className="col-6" type="text" id="school_name" name="school_name" placeholder="School Name" value={schoolDetails['school_name']} onChange={changeHandler} />
        </div>

        <div>
          <label for="address">Dirección:</label>
          <input className="col-6" type="text" id="address" name="address" placeholder="Address" value={schoolDetails['address']} onChange={changeHandler} />
        </div>

        <div>
          <label for="phone">Teléfono:</label>
          <input className="col-6" type="text" id="phone" name="phone" placeholder="(55) 5555-5555" value={schoolDetails['phone']} onChange={changeHandler} />
        </div>

        <Button className="btn btn-primary" type="button" id="submit" name="submit" value="Edit School" onClick={onClickHandler}> Guardar </Button>
      </form>
    </div>
  )
}

export default SchoolEdit;
