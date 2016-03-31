import React from 'react';
import ContactsList from './contacts-list';

var contacts = [
    { id: 1, name: 'test1', number: '123456'},
    { id: 2, name: 'test2', number: '17889456'},
    { id: 3, name: 'test3', number: '34234'}
]
class Contacts extends React.Component {
    render() {
        return(
            <div>
                <h3>Contacts</h3>
                <ContactsList contacts={contacts}/>
            </div>
        )
    }
}
export default Contacts