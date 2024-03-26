import propstypes from 'prop-types';
function Student(props){

    
     return(
    <div>
        <h1>Name:{props.name}</h1>
        <h2>Age:{props.age}</h2>
    </div>   );
}
Student.propstypes={
    name:propstypes.string,
    age:propstypes.number,
}
Student.defaultprops={
    name:"XXX",
}

export default Student;