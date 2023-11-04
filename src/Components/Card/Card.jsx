import "./Card.css"
export default function Card(props) {
  return <div className="card_container">
    <div className="card_title">
        <h3>{props.object.title}</h3>
    </div>
    <div className="card_img">
        <img 
          src={props.object.url}
          alt={props.object.title} 
          onClick={()=>props.delCard(props.object.id)}
        />
    </div>
  </div>;
  
}
