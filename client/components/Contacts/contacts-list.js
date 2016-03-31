import React from 'react'
import Contact from './contact';

class ContactsList extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }
    updateSearch(e) {
        this.setState({search: e.target.value})
    }
    render(){
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return (
                    (contact.name.toLowerCase().indexOf(this.state.search)
                    && contact.number.indexOf(this.state.search.toLowerCase()))!== -1
                )
            }
        )
        return(
            <div>
                <input type="text"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder="Search Contacts"
                />
                <ul>
                    { filteredContacts.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                </ul>

            </div>
        )
    }
}
export default ContactsList
