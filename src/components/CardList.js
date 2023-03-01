import Card from './Card';
import { robots } from '../data/robots';

const CardList = () => {
    return (
        <ul>
            {robots.map(item=>(
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                />
            ))}
        </ul>
    )
}

export default CardList;