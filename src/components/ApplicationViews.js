import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import ApiManager from './modules/APIManager'



class ApplicationViews extends Component {

    state = {
        animals: [],
        locations: [],
        employees: [],
        owners: []
    }






    componentDidMount() {
        
         const _state = {}
        ApiManager.all(animals).then(animals => _state.animals = animals)
        .then(() => ApiManager.all(employees).then(employees => _state.employees = employees))
        .then(() =>ApiManager.all(locations).then(locations => _state.locations = locations))
        .then(() =>ApiManager.all(owners).then(owners => _state.owners = owners))
        .then(() => {this.setState(_state)})

    }

    // deleteAnimal = id => AnimalManager.removeAndList(id)
    //     .then(animals => this.setState({
    //         animals: animals
    //     }))

    //     addAnimal = animal => AnimalManager.addAndList(animal)
    //     .then(animals => this.setState({
    //         animals: animals
    //     }))

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