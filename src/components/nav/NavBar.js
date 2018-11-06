import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ApiManager from '../modules/APIManager'
import Suggestions from '../modules/Suggestions'


class NavBar extends Component {
    state = {
        query: '',
        results: []
    }

     handleInputChange = () => {
         this.setState({
             query: this.search.value
         }, () => {
             if (this.state.query) {
                     console.log("query", this.state.query)
                     ApiManager.getSearch(this.state.query).then((data) => {
                         console.log('re',data)
                         this.setState({
                             results: data
                         })
                     })
             } else if (!this.state.query) {}
         })
     }
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <form>
                            <input
                     placeholder="Search for..."
                         ref={input => this.search = input}
                            onChange={this.handleInputChange}
                                />
                            <Suggestions results={this.state.results} />
                             </form>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar


// if (this.state.query && this.state.query.length > 1) {
//     if (this.state.query.length % 2 === 0) {
//         console.log("query", this.state.query)
//         ApiManager.getSearch(this.state.query).then((data) => {
//             console.log('re', data)
//             this.setState({
//                 results: data
//             })
//         })
//     }