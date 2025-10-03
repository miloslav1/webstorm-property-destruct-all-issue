import './App.css'

function App() {
  return (
    <>
        <ListItem className={"card"} name={"Name"}></ListItem>
    </>
  )
}

export default App


type ListItemProps = {
    name: string,
    className: string
};

export function ListItem(props: ListItemProps) {
    return (
        <div className={props.className}>{props.name}</div>
    )
}
