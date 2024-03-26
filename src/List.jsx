function List(props){
    const first=props.name;
    const second=props.cat;
    
    const a=first.map(itm=><li>{itm.name}</li>)
    
     return(<>
     <h1>{second}</h1>
     <ol>{a}</ol>
    </>);
}
export default List;