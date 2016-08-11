import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// material-ui
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// lib
import axios from 'axios'

class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      evaluation: '',
      flavor: '',
      lowerTemperature: '',
      maturation: '',
      sakeRate: '',
      taste: '',
      upperTemperature: '',
    }
  }

  send(){
    axios.post( '/api/reviews' , {
      sakeId: this.props.sakeId,
      date: new Date(),
      evaluation: this.state.evaluation,
      comment: document.getElementById('comment').value,
      flavor: this.state.flavor,
      taste: this.state.taste,
      maturation: this.state.maturation,
      lowerTemperature: this.state.lowerTemperature,
      upperTemperature: this.state.upperTemperature,
      userId: 'user id',
      userName: 'user name',
      matched: document.getElementById('matched').value,
    })
    .then( res => {
      console.log( res )
    })
    .catch( error => {
      console.log( error )
    })
  }

  render() {
    const styles = {
      button: {
        margin: '1em 0',
      },
    }
    return (
      <div>
          <SelectField
            id="evaluation"
            floatingLabelFixed={true}
            floatingLabelText="評価*"
            fullWidth={true}
            value={this.state.evaluation}
            onChange={ (event, index, value) => this.setState( { evaluation: value } ) } >
            <MenuItem value={1} primaryText="もう飲まない" />
            <MenuItem value={2} primaryText="好んでは飲まない" />
            <MenuItem value={3} primaryText="また飲んでもいい" />
            <MenuItem value={4} primaryText="また飲みたい" />
            <MenuItem value={5} primaryText="定番にしたい" />
          </SelectField>

          <TextField
            id="comment"
            floatingLabelFixed={true}
            floatingLabelText="香味*"
            fullWidth={true}
            multiLine={true}
            rows="3"
          />

          <SelectField
            id="flavor"
            floatingLabelFixed={true}
            floatingLabelText="香り*"
            fullWidth={true}
            value={this.state.flavor}
            onChange={ (event, index, value) => this.setState( { flavor: value } ) } >
            <MenuItem value={1} primaryText="低い" />
            <MenuItem value={2} primaryText="やや低い" />
            <MenuItem value={3} primaryText="やや高い" />
            <MenuItem value={4} primaryText="高い" />
          </SelectField>
          <SelectField
            id="taste"
            floatingLabelFixed={true}
            floatingLabelText="味*"
            fullWidth={true}
            value={this.state.taste}
            onChange={ (event, index, value) => this.setState( { taste: value } ) } >
            <MenuItem value={1} primaryText="淡い" />
            <MenuItem value={2} primaryText="やや淡い" />
            <MenuItem value={3} primaryText="やや濃い" />
            <MenuItem value={4} primaryText="濃い" />
          </SelectField>
          <SelectField
            id="maturation"
            floatingLabelFixed={true}
            floatingLabelText="熟成*"
            fullWidth={true}
            value={this.state.maturation}
            onChange={ (event, index, value) => this.setState( { maturation: value } ) } >
            <MenuItem value={1} primaryText="フレッシュ" />
            <MenuItem value={2} primaryText="ややフレッシュ" />
            <MenuItem value={3} primaryText="やや熟成" />
            <MenuItem value={4} primaryText="熟成" />
          </SelectField>

          <SelectField
            id="lowerTemperature"
            floatingLabelFixed={true}
            floatingLabelText="温度（下限）"
            fullWidth={true}
            value={this.state.lowerTemperature}
            onChange={ (event, index, value) => this.setState( { lowerTemperature: value } ) } >
            <MenuItem value={1} primaryText="一番冷たい(5度位)" />
            <MenuItem value={2} primaryText="やや冷たい(10度位)" />
            <MenuItem value={3} primaryText="常温(15度位)" />
            <MenuItem value={4} primaryText="ぬる燗(40度位)" />
            <MenuItem value={5} primaryText="熱燗(50度位)" />
          </SelectField>
          <SelectField
            id="upperTemperature"
            floatingLabelFixed={true}
            floatingLabelText="温度（上限）"
            fullWidth={true}
            value={this.state.upperTemperature}
            onChange={ (event, index, value) => this.setState( { upperTemperature: value } ) } >
            <MenuItem value={1} primaryText="一番冷たい(5度位)" />
            <MenuItem value={2} primaryText="やや冷たい(10度位)" />
            <MenuItem value={3} primaryText="常温(15度位)" />
            <MenuItem value={4} primaryText="ぬる燗(40度位)" />
            <MenuItem value={5} primaryText="熱燗(50度位)" />
          </SelectField>

          <TextField
            id="matched"
            floatingLabelFixed={true}
            floatingLabelText="相性のよい料理"
            fullWidth={true}
          />

          <RaisedButton label="登録" primary={true} style={styles.button} onClick={ this.send.bind(this) } />
      </div>
    )
  }
}

NewReview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  sakeId: PropTypes.string.isRequired,
}

const mapStateToProps = state => state
export default connect( mapStateToProps )( NewReview )