const ListItem = (props) => {
 return (
    <>
        <li key={`${props.el}-${props.i}`}>
            {props.el}
        </li>
    </>
 );
}

export default ListItem;