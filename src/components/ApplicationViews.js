import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'


class ApplicationViews extends Component {

    state = {
        animals: [],
        locations: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:3000/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:3000/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:3000/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:3000/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }
    deleteAnimal = id => {
        fetch(`http://localhost:3000/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:3000/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        }))
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.ApiAnimalOwners}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners ={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews