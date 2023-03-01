const Card = ({id, name, email}) => {
    return (
        <li>
            <div>
                <img src={`https://robohash.org/${id}?size=200x200`} alt={`${name}'s portrait`} />
            </div>
            <section>
                <h2>{name}</h2>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email}</a>
            </section>
        </li>
    )
}

export default Card;