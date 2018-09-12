import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./animal.css"
import dog from "./DogIcon.png"

class DetailAnimalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const currentAnimal = this.props.animals.find(a => a.id === parseInt(this.props.animal.id, 0)) || {}
    const employeeName = this.props.employees.find(e => e.id === this.props.animal.employeeId) || {}
        const ownerName = this.props.owners.find(e => e.id === this.props.animal.ownerId) || {}
    return (
      <div>
        <Button outline color="info" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Animal Details</ModalHeader>
          <ModalBody>
          <section className="animal">
          {console.log(employeeName)}
                <div key={currentAnimal.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <img src={dog} className="icon--dog" />
                            <div>
                            <h4>
                            {currentAnimal.name}
                            </h4>
                            <p>{employeeName.name}</p>
                            <h6>{ownerName.name}</h6>
                            </div>
                        </div>
                        <h6 className="card-title">{currentAnimal.breed}</h6>
                        {/* <Link className="nav-link" to={`/animals/edit/${animal.id}`}>edit</Link> */}
                        {/* <a href="#"
                            onClick={() => this.props.deleteAnimal(currentAnimal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a> */}
                    </div>
                </div>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.deleteAnimal(currentAnimal.id)
                                .then(() => this.props.history.push("/animals"))}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DetailAnimalModal;