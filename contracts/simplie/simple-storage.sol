// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedValue;
    address public owner;

    event OwnerSet(address indexed owner);
    event ValueUpdated(uint256 newValue);

    constructor() {
        owner = msg.sender;
        emit OwnerSet(owner);
    }

    function setValue(uint256 _value) public {
        storedValue = _value;
        emit ValueUpdated(_value);
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}