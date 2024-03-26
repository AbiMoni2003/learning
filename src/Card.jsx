import img from './assets/pict02.jpg';

function Card(){

    return(
        <div className='card'>
            <img className='card-img' src={img} alt="profile pic"></img>
            <h1 className='card-head'>Abishek</h1>
            <p className='card-para'>This Card is usefull for Websites</p>
            <button className='button'>Click</button>
        </div>
    );
}
export default Card;