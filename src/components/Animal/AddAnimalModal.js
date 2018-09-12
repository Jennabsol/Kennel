import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

class AddAnimalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      animalName: "",
        breed: "",
        employee: "",
        owner: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
this.setState(stateToChange)
}

/*
Local method for validation, creating animal object, and
invoking the function reference passed from parent component
*/
constructNewAnimal = evt => {
evt.preventDefault()
if (this.state.employee === "") {
    window.alert("Please select a caretaker")
} else {
    const animal = {
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
       // ownerId: this.props.owners.find(o => o.name === this.state.owner).id
    }
    const owner = {
      ownerId: this.props.owners.find(o => o.name === this.state.owner).id
    }
    // Create the animal and redirect user to animal list
    this.props.addAnimalStuff(animal,owner)
    //this.props.addAnimalOwner(owner).then(() => this.props.history.push("/animals"))
    // this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
    // this.props.addAnimalOwner(owner).then(() => this.props.history.push("/animals"))
    this.toggle()
}
}
  render() {
    return (
      <div>
        <div className="animalButton">
        <Button  color="success" onClick={this.toggle}>Admit Animal</Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Admit Animal</ModalHeader>
          <ModalBody>
          <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required={true}
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required={true}
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="owner">Assign to owner</label>
                        <select defaultValue="" name="owner" id="owner"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an owner</option>
                        {
                            this.props.owners.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    {/* <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button> */}
                </form>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button type="submit" color="primary" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddAnimalModal;

Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    //backdropTransition: PropTypes.shape(Fade.propTypes),
    // modalTransition - controls modal transition
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    //modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object,
  }

