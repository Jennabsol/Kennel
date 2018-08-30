import React, { Component } from "react"
import person from "./person.png"
import "./employee.css"
import AnimalCard from "../Animal/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={person} className="icon--employee" />
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}


// import React, { Component } from 'react';
// import { Link } from "react-router-dom"
// import "./employee.css"
// import person from "./person.png";

// class EmployeeList extends Component {
//     render() {
//         return (
// <React.Fragment>
//                 <div className="employeeButton">
//                     <button type="button"
//                             className="btn btn-success"
//                             onClick={() => {
//                                 this.props.history.push("/employees/new")}
//                             }>
//                         Add New employee
//                     </button>
//                 </div>
//             <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id} className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <img src={person} className="icon--person" />
//                                 {employee.name}
//                                 <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
//                                 <a href="#"
//                                     onClick={() => this.props.deleteEmployee(employee.id)}
//                                     className="card-link">Delete</a>
//                             </h5>
//                         </div>
//                     </div>
//                 )
//             }
//             </section>
//         </React.Fragment>
//         )
//     }
// }

// export default EmployeeList