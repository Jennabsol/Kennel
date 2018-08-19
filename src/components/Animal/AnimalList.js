import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}


// import React, { Component } from 'react';


// class AnimalList extends Component {
//     render() {
//         const matchedAnimals = this.props.animalOwners.map(animalOwner => {
//             this.props.animals.filter(animal => {if (animalOwner.animalId === animal.id) {return animalOwner.animalId = animal.name} return false})
//             this.props.owners.filter(owner =>{if (animalOwner.ownerId === owner.id) {return animalOwner.ownerId = owner.name} return false})
//            return animalOwner
//        })

//         return (
//             <section className="animals">
//             {
//                 matchedAnimals.map(matchedAnimal =>
//                     <div key={matchedAnimal.id}>
//                      {matchedAnimal.animalId},
//                         {matchedAnimal.ownerId}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default AnimalList

