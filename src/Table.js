import React, {Component} from 'react'
import axios from 'axios'

 class Table extends Component{

    constructor(props) {
        super(props)
        this.state = {
          users: []
        }
    }

    async componentDidMount() {


        let result = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({users: result.data});
        
      }
      renderTableHeader = () => {
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
      }

      renderTableRows = () => {
        return this.state.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.city}`}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          )
        })
      }


      render() {
      
        const {users} = this.state
        
        return users.length > 0
          ? (
            <table>
              <thead>
                <tr>
                  {this.renderTableHeader()}
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody>
            </table>
          ) : (
            <div>
              No users.
          </div>
          )
}}


 export default Table;