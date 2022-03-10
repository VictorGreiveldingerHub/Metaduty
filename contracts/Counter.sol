//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 public visiteCounter = 0;

    constructor() {
        console.log("Deploying a counter, actually set to : ", visiteCounter);
        // A chaque nouvelle visite, incrémenter de 1 le compteur.
        visiteCounter++;
    }

    function getCounter() public view returns (uint256) {
        return visiteCounter;
    }
}
