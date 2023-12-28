const ListItem = (props) => {
 return (
    <>
        <input type="checkbox" />

        <li key={`${props.el}-${props.i}`}>
            {props.el}
        </li>
    </>
 );
}

export default ListItem;