import Card from './Card';

const CardList = ({robotData}) => {
    return (
        <ul>
            {!robotData || robotData.length === 0 ?
            <h2 className='empty'>No robofriends available</h2> :
            robotData.map(item=>(
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