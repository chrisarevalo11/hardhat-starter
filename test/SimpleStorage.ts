import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("SimpleStorage", function () {
  async function deploySimpleStorageFixture() {
    const [owner] = await hre.ethers.getSigners();

    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    return { simpleStorage, owner };
  }

  describe("Deployment", function () {
    it("Should deploy and initialize favoriteNumber to 0", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      expect(await simpleStorage.favoriteNumber()).to.equal(0);
    });
  });

  describe("Store", function () {
    it("Should store the value 42 and retrieve it", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const storeTx = await simpleStorage.store(42);
      await storeTx.wait();

      expect(await simpleStorage.favoriteNumber()).to.equal(42);
    });

    it("Should store a different value and retrieve it", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const storeTx = await simpleStorage.store(123);
      await storeTx.wait();

      expect(await simpleStorage.favoriteNumber()).to.equal(123);
    });
  });
});
