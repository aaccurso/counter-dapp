const Counter = artifacts.require('Counter');

contract('Counter', async () => {
  it('should have zero as initial value', async () => {
    const instance = await Counter.deployed();
    const value = await instance.value.call()
    assert.equal(value.toNumber(), 0);
  });

  it('should increase value by one', async () => {
    const instance = await Counter.deployed();
    const { logs } = await instance.increase()
    assert.equal(logs.length, 1);
    const increasedEvent = logs[0];
    assert.equal(increasedEvent.event, 'Increased');
    assert.equal(increasedEvent.args.newValue.toNumber(), 1);
    const value = await instance.value.call()
    assert.equal(value.toNumber(), 1);
  });
});
