pragma solidity 0.8.12;

contract Counter {
    /* Define counter of type integer */
    uint256 public counter;

    /* This runs when the contract is deployed */
    constructor() public {
        counter = 0;
    }

    /* Simple function to add 1 to the counter */
    function increment() public {
        counter += 1;
    }
}
