import React, { Component } from 'react'
import Header from './Components/Header'
import ContainerBox from './Components/ContainerBox'

class App extends Component {
  
  constructor(){
    super();
    this.state={
    color: 'red',
    show:true
    }
    console.log('hello from constructor App.js')
  }

  static getDerivedStateFromProps(newprops,state){
   console.log('hello from getDerivedStateFromProps App.js',newprops,state)
  return null
  }



  componentDidMount(){
    console.log('hello from ComponentDidMount App.js')
  }

  shouldComponentUpdate(){
    console.log('hello from shouldComponentUpdate App.js')
    return true
  }
  
  componentDidUpdate(){
    console.log('hello from componentDidUpdate App.js')
  }


  render() {
  console.log('hello from render App.js')
    return (
   <>
   <Header />
   <button onClick={()=>this.setState({color:'green'})} >update</button>
   <h2>{this.state.color } AppJs</h2>
   <button onClick={()=>this.setState({show:!this.state.show})} >{this.state.show ? 'hide' : 'show'}</button>
    {
      this.state.show &&  <ContainerBox />
    }
   </>
    )
  }

}


export default  App