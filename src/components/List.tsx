interface ListProps {
    items: string[];
    handleDelete: (index: number) => void;
}

const List: React.FC<ListProps> = ({ handleDelete, items }) => {

    return (
        <ul className="list">
            
            {items.map((item, index) => (
                <li className="container-elements" key={index}>
                    <input type="checkbox" />
                    <p>{item}</p>
                    <button className="delete-button" type="button" onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default List;