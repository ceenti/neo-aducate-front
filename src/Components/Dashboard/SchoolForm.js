import React from "react";

function SchoolForm() {
  return (
    <div className="school-form">
      <h2>Nueva Escuela</h2>
      <form>
        <div>
          <label for="name">Nombre:</label>
          <input className="col-6" type="text" id="name" name="name" placeholder="School Name" />
        </div>

        <div>
          <label for="address">Dirección:</label>
          <input className="col-6" type="text" id="address" name="address" placeholder="Address" />
        </div>

        <div>
          <label for="phone">Teléfono:</label>
          <input className="col-6" type="text" id="phone" name="phone" placeholder="(55) 5555-5555" />
        </div>

        <input className="btn btn-primary" type="submit" id="submit" name="submit" value="Create School" />
      </form>
    </div>
  )
}

export default SchoolForm;
