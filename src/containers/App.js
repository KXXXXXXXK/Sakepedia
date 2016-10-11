import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { setAuthStatus } from '../actions/isLogin'
// css
import classes from '../../public/stylesheets/scss/app.scss'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    if( document.getElementById( 'id' ).innerHTML ) {
      window.localStorage.setItem('id', document.getElementById( 'id' ).innerHTML)
      window.localStorage.setItem('name', document.getElementById( 'name' ).innerHTML)
      this.props.dispatch( setAuthStatus( true ) )
    } else if ( window.localStorage.getItem( 'id' ) ) {
      this.props.dispatch( setAuthStatus( true ) )
    }
    else {
      this.props.dispatch( setAuthStatus( false ) )
    }
  }
  render() {
    return (
      <div className={classes.content}>
        <Header isLogin={this.props.isLogin}/>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( App )
