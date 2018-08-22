import React, { Component } from "react"
import "./owner.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating owner object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.ownerName === "") {
            window.alert("Please Enter owner's Name!")
        } else {
            const owner = {
                name: this.state.ownerName
            }
            // Create the owner and redirect user to owner list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerName"
                               placeholder="owner name" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}