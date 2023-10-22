import ResultBox from './ResultBox';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {

  it('should render proper info about conversion when PLN -> USD', () => {

    const testCases = [
      { from: 'PLN', to: 'USD', amount: 100 },
      { from: 'PLN', to: 'USD', amount: 30 },
      { from: 'PLN', to: 'USD', amount: 220 },
      { from: 'PLN', to: 'USD', amount: 537 },
    ];

    for (const testObj of testCases) {

      const amount = (testObj.amount).toFixed(2);
      const from = testObj.from;
      const to = testObj.to;

      render(<ResultBox from={from} to={to} amount={Number(amount)} />);

      // Find field elements
      const convertedAmount = screen.getByTestId('convertedAmount');

      const result = (amount/ 3.5).toFixed(2);

      // Set test values to fields
      expect(convertedAmount).toHaveTextContent(`${from} ${amount} = $${result}`);

      // Clear the component
      cleanup();
    }
  });

  it('should render proper info about conversion when USD -> PLN ', () => {

    const testCases = [
      { from: 'USD', to: 'PLN', amount: 10 },
      { from: 'USD', to: 'PLN', amount: 230 },
      { from: 'USD', to: 'PLN', amount: 125.50},
    ];

    for (const testObj of testCases) {

      const amount = (testObj.amount).toFixed(2);
      const from = testObj.from;
      const to = testObj.to;

      render(<ResultBox from={from} to={to} amount={Number(amount)} />);

      // Find field elements
      const convertedAmount = screen.getByTestId('convertedAmount');
      const result = (amount*3.5).toFixed(2);

      // Set test values to fields
      expect(convertedAmount).toHaveTextContent(`$${amount} = ${to} ${result}`);

      cleanup();
    }
  });

  it('should render proper info about conversion when PLN == PLN', () => {

    const testCases = [
      { amount: 100,   from: 'PLN', to: 'PLN' },
      { amount: 200,   from: 'PLN', to: 'PLN' },
      { amount: 35.50, from: 'PLN', to: 'PLN' },
      { amount: 337,   from: 'PLN', to: 'PLN' },
    ];

    for (const testObj of testCases) {

      const amount = (testObj.amount).toFixed(2);
      const from = testObj.from;
      const to = testObj.to;

      render(<ResultBox from={from} to={to} amount={Number(amount)} />);

      // Find field elements
      const convertedAmount = screen.getByTestId('convertedAmount');

      expect(convertedAmount).toHaveTextContent(`${from} ${amount} = ${to} ${amount}`);

      // Unmount the component
      cleanup();
    }
  });

  it('should render proper info about conversion when  USD == USD ', () => {

    const testCases = [
      { amount: 100,   from: 'USD', to: 'USD' },
      { amount: 200,   from: 'USD', to: 'USD' },
    ];

    for (const testObj of testCases) {

      const amount = (testObj.amount).toFixed(2);
      const from = testObj.from;
      const to = testObj.to;

      render(<ResultBox from={from} to={to} amount={Number(amount)} />);

      // Find field elements
      const convertedAmount = screen.getByTestId('convertedAmount');

      expect(convertedAmount).toHaveTextContent(`$${amount} = $${amount}`);

      // Unmount the component
      cleanup();
    }
  });


  it('should render proper info about conversion when amount is negative', () => {

    const testCases = [

      { from: 'USD', to: 'PLN', amount: '-5.00'},
      { from: 'PLN', to: 'USD', amount: '-125.00'},
      { from: 'USD', to: 'PLN', amount: '-40.00'},
      { from: 'PLN', to: 'USD', amount: '-12.00'},
      { from: 'PLN', to: 'PLN', amount: '-77.00'},
      { from: 'USD', to: 'USD', amount: '-35.50'},  
    ];

    for (const testObj of testCases) {
        const amount = testObj.amount;
        const from = testObj.from;
        const to = testObj.to;

        render(<ResultBox from={from} to={to} amount={Number(amount)} />);

        // Find field elements
        const convertedAmount = screen.getByTestId('negativeAmount');

        // Set test values to fields
        expect(convertedAmount).toHaveTextContent(`Wrong value...`);

        // Unmount the component
        cleanup();
    }
  });

});
  
  
  
  
  
  
  
  
  
  
  