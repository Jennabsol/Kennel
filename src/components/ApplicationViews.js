import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import ApiManager from './modules/APIManager'
import AnimalDetail from './Animal/AnimalDetail'
import AnimalForm from "./Animal/AnimalForm"
import EmployeeForm from "./Employee/EmployeeForm"
import EmployeeDetail from './Employee/EmployeeDetail'
import OwnerForm from "./Owner/OwnerForm"
import OwnerDetail from './Owner/OwnerDetail'
import AnimalEditForm from './Animal/AnimalEditForm'



class ApplicationViews extends Component {

    state = {
        animals: [],
        locations: [],
        employees: [],
        owners: [],

    }
    componentDidMount() {
         const _state = {}
        ApiManager.all("animals").then(animals => _state.animals = animals)
        .then(() => ApiManager.all("employees").then(employees => _state.employees = employees))
        .then(() =>ApiManager.all("locations").then(locations => _state.locations = locations))
        .then(() =>ApiManager.all("owners").then(owners => _state.owners = owners))
        .then(() => {this.setState(_state)})
        }

        deleteAnimal = id => ApiManager.delete("animals", id)
        .then(animals => this.setState({
            animals: animals
        }))

        addAnimal = animal => ApiManager.add("animals",animal)
        .then(animals => this.setState({
            animals: animals
        }))
        editAnimal = (id, animal) => ApiManager.edit("animals", id, animal)
        .then(animals => this.setState({
            animals: animals
        }))
        deleteEmployee = id => ApiManager.delete("employees", id)
        .then(employees => this.setState({
            employees: employees
        }))

        addEmployee = employee => ApiManager.add("employees",employee)
        .then(employees => this.setState({
            employees: employees
        }))
        deleteOwner = id => ApiManager.delete("owners", id)
        .then(owners => this.setState({
            owners: owners
        }))

        addOwner = owner => ApiManager.add("owners",owner)
        .then(owners => this.setState({
            owners: owners
        }))



    // deleteAnimal = id => {
    //     fetch(`http://localhost:3000/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:3000/animals`))
    //     .then(e => e.json())
    //     .then(animals => this.setState({
    //         animals: animals
    //     }))
    // }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                       deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees}
                       owners={this.state.owners}/>
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals}
                    editAnimal={this.editAnimal} />
                }} />
                <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                    return <AnimalEditForm {...props}
                    animals={this.state.animals}
                    employees={this.state.employees}
                       owners={this.state.owners}
                    editAnimal={this.editAnimal}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}
                       deleteEmployee={this.deleteEmployee}
                       employees={this.state.employees} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                       addEmployee={this.addEmployee}
                       employees={this.state.employees}/>
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props}
                    deleteEmployee={this.deleteEmployee}
                    employees={this.state.employees}
                    editEmployee={this.editEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}
                       deleteOwner={this.deleteOwner}
                       owners={this.state.owners} />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                       addOwner={this.addOwner}
                       owners={this.state.owners}/>
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props}
                    deleteOwner={this.deleteOwner}
                    owners={this.state.owners}
                    editOwner={this.editOwner} />
                }} />
            </React.Fragment>
        )
    }
}
export default ApplicationViews