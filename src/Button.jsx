function Button(){
        const handle=(e)=>e.target.style.display="none";

    return(<button onClick={(e)=>handle(e) } style={{cursor:"pointer"}}>Clock me</button>);

}
export default Button;