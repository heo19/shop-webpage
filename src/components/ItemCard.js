import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './ItemCard.css'

function ItemCard(props) {
  return (
    <div className="itemCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + props.itemImage} className="itemImage"/>
        <Card.Body>
          <Card.Title>Temp Titie: {props.itemTitle}</Card.Title>
          <Card.Text>
            Price: {props.itemPrice}
          </Card.Text>
          <Link to="/detail"><Button variant="outline-dark">View More</Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemCard