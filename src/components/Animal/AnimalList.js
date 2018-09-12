import React, { Component } from "react"
import "./animal.css"
import AnimalCard from "./AnimalCard"
import AddAnimalModal from "./AddAnimalModal"

export default class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
                <AddAnimalModal {...this.props}/>
                {/* <div className="animalButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/animals/new")}
                            className="btn btn-success">
                        Admit Animal
                    </button>
                </div> */}
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}

// import React, { Component } from 'react'
// import { Link } from "react-router-dom"
// import dog from "./DogIcon.png"
// import "./animal.css"

// export default class AnimalList extends Component {
//     render () {
//         return (
//             <React.Fragment>
//                 <div className="animalButton">
//                     <button type="button"
//                             className="btn btn-success"
//                             onClick={() => {
//                                 this.props.history.push("/animals/new")}
//                             }>
//                         Admit Animal
//                     </button>
//                 </div>
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <div key={animal.id} className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <img src={dog} className="icon--dog" />
//                                 {animal.name}
//                                 <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
//                                 <a href="#"
//                                     onClick={() => this.props.deleteAnimal(animal.id)}
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


// import React, { Component } from 'react';


// class AnimalList extends Component {
//     render() {
//         const matchedAnimals = this.props.animalOwners.map(animalOwner => {
//             this.props.animals.filter(animal => {
//                 if (animalOwner.animalId === animal.id)
//                 {
//                     return animalOwner.animalId = animal.name
//                 }
//                  return false
//                 })
//             this.props.owners.filter(owner =>{
//                 if (animalOwner.ownerId === owner.id)
//                 {
//                     return animalOwner.ownerId = owner.name
//                 }
//                 return false
//             })
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


// import React, { Component } from 'react'
// import OwnerList from "../owner/OwnerList"


// class AnimalList extends Component {
//     render() {

//         let animalsWithOwners = this.props.animals.map(animal => {

//             let animalOwners = this.props.animalOwners.filter(ao => {
//                 return ao.animalId === animal.id
//             })
//             .map(ownerId => {
//                 let owner = this.props.owners.find(owner => {
//                     return owner.id === ownerId.ownerId
//                 })
//                 return owner
//             })

//             console.log(animalOwners)

//             return {
//                 id: animal.id,
//                 owners: animalOwners,
//                 name: animal.name
//             }
//         })

//         console.log(animalsWithOwners)


//         return (
//             <section className="animals">
//             {
//                 animalsWithOwners.map(animal =>
//                     <div key={animal.id}>
//                         <h3>{animal.name}</h3>
//                         <OwnerList owners={animal.owners} />
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default AnimalList

