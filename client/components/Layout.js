import React    from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';

class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}

                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));

export default Layout