import Button from "./Button"

const onClick = () =>{

    console.log('Click')

    
}   

const Header = ({title }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

export default Header
