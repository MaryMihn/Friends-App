import React from 'react';
import Button from 'react-bootstrap/Button'

export default class Seaching extends React.Component {
    constructor(props){
        super(props)
        this.state={
            radio:''
        }
    }

    change = (e) => {
      let value =e.target.value
      this.setState({radio:value})
    }

    filterBySex = () => {
        this.props.filterBySex(this.state.radio)
        console.log(this.state.radio)
    }
    
    render(){
        return(
            <div className="searching">
        <div className='sortingByAge'>
            <label >Sort by Age</label>
            <button className="btn btn-primary" onClick={this.props.sortingByAgeUp}>+</button>
        <button className="btn btn-primary" onClick={this.props.sortingByAgeDown}>-</button>
        </div>
        <div className='sortingByName'>
            <label>Sort by First Name</label>
            <Button onClick={this.props.sortingByNameA}>A</Button>
            <Button onClick={this.props.sortingByNameZ}>Z</Button>
        </div>
        <div className='filterByAge'>
            <input type="number"  ref={this.props.filterByAgeRef}/>
            <Button onClick={this.props.findByAge}>Filter by Age</Button>
        </div>
        <div className='filterByName'>
            <input type="text" ref={this.props.filterByNameRef} />
            <Button onClick={this.props.findByName}>Filter by First Name</Button>
        </div>
        <div className='filterByLocation'>
            <input type="text" ref={this.props.filterByLocationRef} />
            <Button onClick={this.props.findByLocation}>Filter by Location</Button>
        </div>
        <form className='filterBySex'>
            <input type="radio" value="male" name="Sex" id ='male'  onChange={this.change} />
            <label htmlFor="male">Male</label>
            <input type="radio" value="female" name="Sex" id="female"   onChange={this.change}/>
            <label htmlFor="female">Female</label><br />
            <Button  onClick={this.filterBySex} >Filter by Sex</Button>
        </form>
    </div>
        )
    }

}