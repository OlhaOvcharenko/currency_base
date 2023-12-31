
import CurrencyForm from './CurrencyForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { cleanup } from '@testing-library/react';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
});

it('should run action callback with proper data on form submit', () => {

    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD' },
        { amount: '20', from: 'USD', to: 'PLN' },
        { amount: '200', from: 'PLN', to: 'USD' },
        { amount: '345', from: 'USD', to: 'PLN' },
    ];
  
    for(const testObj of testCases) {
        
        const amount = testObj.amount;
        const from = testObj.from;
        const to = testObj.to;


        const action = jest.fn();

        // render component
        render(<CurrencyForm action={action} />);
    
        // find “convert” button
        const submitButton = screen.getByText('Convert');
    
        // find fields elems
        const amountField = screen.getByTestId('amount');
        const fromField = screen.getByTestId('from-select');
        const toField = screen.getByTestId('to-select');

        // set test values to fields

        userEvent.type(amountField, amount);
        userEvent.selectOptions(fromField, from);
        userEvent.selectOptions(toField, to);

    
        // simulate user click on "convert" button
        userEvent.click(submitButton);

        
        // check if action callback was called once and with proper argument
        expect(action).toHaveBeenCalledTimes(1);
        expect(action).toHaveBeenCalledWith({amount:  Number(amount), from: from, to: to });


         // unmount component
        cleanup()
    
    }

});