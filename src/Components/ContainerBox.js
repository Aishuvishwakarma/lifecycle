import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
class ContainerBox extends Component {

    constructor(){
        super()
        this.state={
            obj:{username:'john'}
        }
    }


    static getDerivedStateFromProps(newprops,state){
        console.log('hello from getDerivedStateFromProps ContainerBox.js',newprops,state)
       return null
       }
     
       componentDidMount(){
         console.log('hello from ComponentDidMount ContainerBox.js')
       }

       componentWillUnmount(){
        console.log('hello from componentWillUnmount ContainerBox.js')
      }

    render() {
      //  console.log('hello from rendor ContainerBox.js')
        return (
        <Container>
          <h2>{this.state.obj.username} ContainerBoxjs</h2>
          </Container>
        )
    }
}


export default ContainerBox;