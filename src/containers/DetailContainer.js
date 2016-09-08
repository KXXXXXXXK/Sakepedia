import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getSake } from '../actions/sake'
// components
import Detail from '../components/Detail'

class DetailContainer extends React.Component{
  constructor(props) {
    super(props)
    getSake( this.props.dispatch, this.props.params.sakeId )
  }

  changeTab( tab ) {
    if( tab === 'reviews' ) {
      // getSake( this.props.dispatch, this.props.params.sakeId )
    }
  }

  render() {
    return (
      <Detail
        changeTab={this.changeTab.bind(this)}
        initialTab="detail"
        sake={this.props.sake}
      />
    )
  }
}

DetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  sake: PropTypes.object.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( DetailContainer )
