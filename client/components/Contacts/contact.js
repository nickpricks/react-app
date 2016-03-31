import React from 'react'

class Contact extends React.Component{
    render(){
        let contact = this.props.contact;
        return(
            <li>{contact.name} {contact.number}</li>
        )
    }
}
export default Contact
