// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter {
  uint public value;

  event Increased(uint newValue);

  function increase() public {
    value = value + 1;
    emit Increased(value);
  }
}
