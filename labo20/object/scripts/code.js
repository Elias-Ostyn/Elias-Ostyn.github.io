const setup = () => {


    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);
    console.log(student.age);


    let txt = JSON.stringify(student);

}
window.addEventListener("load", setup);
