import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class CurrencyHeaderBlock extends Component {
  render() {
    const { currency } = this.props;
    // console.log(localStorage.getItem('Cart'));
    
    const currencyBlock = currency.currency.map(item => {
      return (
        <option key={item.mark} value={item.mark}>
          {item.mark}
        </option>
      );
    })
    const currencyFix = currency.currentCurrency.map(item => {
      return item.mark;
    });
    return (
      <FormControl>
        <Select
          native
          value={currencyFix[0]}
          onChange={this.props.handleChange()}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          {currencyBlock}
        </Select>
      </FormControl>
    )
  }
}

export default CurrencyHeaderBlock;

