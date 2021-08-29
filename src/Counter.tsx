import React from 'react';

// @ts-ignore
function Counter({contract}) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      const value = await contract.value.call();
      setValue(value.toNumber());
    })()
    // @ts-ignore
    contract.on('Increased', newValue => {
      setValue(newValue.toNumber());
    });
  }, []);
  const increaseValue = () => {
    contract.increase(); // TODO: handle 'receipt' and 'error'
  };

  return <div>
    <div>Counter value: {value}</div>
    <button onClick={increaseValue}>Increase</button>
  </div>;
}

export default Counter;
