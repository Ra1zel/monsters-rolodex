import "./card.styles.css";
function Card({monster}) {
    const {name,id,email} = monster;
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={name}
            ></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;
