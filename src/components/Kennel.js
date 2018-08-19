// import React, { Component } from "react"
// import EmployeeList from "./EmployeeList"
// import LocationList from "./LocationList"
// import AnimalList from "./AnimalList"
// //import "./Kennel.css"


// class Kennel extends Component {


//         ApiOwners = [
//             { id: 1, name: "Ryan Tanay" },
//             { id: 2, name: "Emma Beaton" },
//             { id: 3, name: "Dani Adkins" },
//             { id: 4, name: "Adam Oswalt" },
//             { id: 5, name: "Fletcher Bangs" },
//             { id: 6, name: "Angela Lee" }]
//     ApiEmployees = [
//             { id: 1, name: "Jessica Younker" },
//             { id: 2, name: "Jordan Nelson" },
//             { id: 3, name: "Zoe LeBlanc" },
//             { id: 4, name: "Blaise Roberts" }]
//        ApiLocations =[
//             { id: 1, name: "Nashville North" },
//             { id: 2, name: "Nashville South" }]
//         ApiAnimals =[
//             { id: 1, name: "Doodles" },
//             { id: 2, name: "Jack" },
//             { id: 3, name: "Angus" },
//             { id: 4, name: "Henley" },
//             { id: 5, name: "Derkins" },
//             { id: 6, name: "Checkers" }]
//             ApiAnimalOwner =[
//                 {id: 1, animalId: 1, ownerId:2},
//                 {id: 2, animalId: 2, ownerId:3},
//                 {id: 3, animalId: 3, ownerId:4},
//                 {id: 4, animalId: 4, ownerId:5},
//                 {id: 5, animalId: 5, ownerId:6},
//                 {id: 6, animalId: 6, ownerId:1}
//             ]

//             state = {
//             owners : this.ApiOwners,
//             employees: this.ApiEmployees,
//             locations: this.ApiLocations,
//             animals: this.ApiAnimals
//         }

//     render() {
//         return (
//             <article className="kennel">
//                 <LocationList locations={this.state.locations} />
//                 <EmployeeList employees={this.state.employees} />
//                 <AnimalList animals={this.state.animals} />
//             </article>
//         )
//     }
// }

// export default Kennel

import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel