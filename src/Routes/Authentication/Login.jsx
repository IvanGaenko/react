import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    login: '',
    password: ''
  };

  onChangeUser = ({ target: { value }}) => {
    this.setState({ login: value })
  }

  onChangePassword = ({ target: { value }}) => {
    this.setState({ password: value })
  }

  onSubmit = () => {
    this.setState({
      ...this.state,
      auth: true
    }, () => this.props.login(this.state))
  }

  render() {   
    const { isAuthenticated, logout } = this.props;
    return ( isAuthenticated ? (
      <button
        onClick={logout}
      >Log Out</button>
    ) : (
      <div>
        <h1>Login</h1>
        <div>
          <input
          type="text"
          placeholder="Enter your login"
          onChange={this.onChangeUser}
          />
        </div>
        <div>
          <input
          type="password"
          placeholder="Enter your password"
          onChange={this.onChangePassword}
          />
        </div>
        <div>
          <button
            onClick={this.onSubmit}
          >Log in</button>
        </div>
        <p>Don't have an account? <Link to={'/signup'}>Create one</Link></p>
      </div>
      )
    );
  }
}

export default Login;

// Login.propTypes = {
// };

// showCart.length === 0) ? (
//   <div>
//     <h1>Cart is empty</h1>
//     <div>Do you want to look at our products?</div>
//     <Link to="/posts/">
//       <Button id="cart-go-products" variant="contained" color="primary">
//         Go to products
//       </Button>
//     </Link>
//   </div>
// ) : (
//   <div id="cart-list">
//     {showCart.map(item => (
//       <CartContent
//         key={item.id}
//         {...item}
//         delCart={delCart}
//         myCurrency={myCurrency}
//       />
//     ))}
//     <Typography gutterBottom variant="headline" component="h2">
//       Total cost is: {getTotalCurrency}
//     </Typography>
//   </div>