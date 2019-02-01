// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice



const createdoctor = (name, address, speciality) => {
    return {
        name: name,
        address: address,
        speciality: speciality
    }
}

let newDoc = createdoctor("Smith", "New Street", "Brain Surgeon")
console.log(newDoc)