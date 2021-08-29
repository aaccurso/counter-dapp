import React from 'react';
import Counter from './Counter';
import CounterArtifact from './contracts/Counter.json';
import { ethers } from 'ethers';
declare const window: any;

function App() {
  const [contract, setContract] = React.useState<any>();
  React.useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');
    const signer = provider.getSigner();
    const contractAddress = '0xD475e348bEA6Be295bbceC690E50d2875Db5a9e0';
    const contract = new ethers.Contract(
      contractAddress,
      CounterArtifact.abi,
      signer
    );
    setContract(contract);
  }, []);

  return (
    <div>
      {contract && <Counter contract={contract} />}
    </div>
  );
}

export default App;
