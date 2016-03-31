import React from 'react'

export default class TodosList extends  React.Component{
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}