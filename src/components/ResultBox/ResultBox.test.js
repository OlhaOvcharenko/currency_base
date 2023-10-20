import ResultBox from './ResultBox';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

describe('Component ResultBox', () => {
  it('should render proper info about conversion when PLN -> USD', () => {

    const testCases = [
        { from: 'PLN', to: 'USD', amount: '100.00', result: '28.57'},
        { from: 'PLN', to: 'USD', amount: '30.00', result: '8.57' },
        // Add more test cases with different 'amount' values here
    ];

    for (const testObj of testCases) {
        const amount = testObj.amount;
        const from = testObj.from;
        const to = testObj.to;
        const result = testObj.result;
  
        render(<ResultBox from={from} to={to} amount={Number(amount)} />);
  
        // Find field elements
        const convertedAmount = screen.getByTestId('convertedAmount');
  
        // Set test values to fields
        expect(convertedAmount).toHaveTextContent(`${from} ${amount} = $${result}`);
  
        // Unmount the component
        cleanup();
    }
  });

  it('should render proper info about conversion when USD -> PLN', () => {

    const testCases = [
        { from: 'USD', to: 'PLN', amount: '10.00', result: '35.00'},
        { from: 'USD', to: 'PLN', amount: '230.00', result: '805.00'},
        // Add more test cases with different 'amount' values here
    ];

    for (const testObj of testCases) {
        const amount = testObj.amount;
        const from = testObj.from;
        const to = testObj.to;
        const result = testObj.result;
  
        render(<ResultBox from={from} to={to} amount={Number(amount)} />);
  
        // Find field elements
        const convertedAmount = screen.getByTestId('convertedAmount');
  
        // Set test values to fields
        expect(convertedAmount).toHaveTextContent(`${amount} = ${to} ${result}`);
  
        // Unmount the component
        cleanup();
    }
  });

  it('should render proper info about conversion when USD = USD, PLN=PLN', () => {

    const testCases = [
        { amount: '100.00', from: 'PLN', to: 'PLN', },
        { amount: '20.00',  from: 'USD', to: 'USD' },
        { amount: '200.00', from: 'PLN', to: 'PLN' },
        { amount: '345.00', from: 'USD', to: 'USD' },
        // Add more test cases with different 'amount' values here
    ];

    for (const testObj of testCases) {
        const amount = testObj.amount;
        const from = testObj.from;
        const to = testObj.to;
        render(<ResultBox from={from} to={to} amount={Number(amount)} />);
  
        // Find field elements
        const convertedAmount = screen.getByTestId('convertedAmount');
  
        // Set test values to fields
        const fromSymbol = from === 'PLN' ? 'PLN' : '$';
        const toSymbol = to === 'PLN' ? 'PLN' : '$';
        expect(convertedAmount).toHaveTextContent(`${fromSymbol} ${amount} = ${toSymbol} ${amount}`);
  
        // Unmount the component
        cleanup();
    }
  });
});
  
  
  
  
  
  
  
  
  
  
  
  