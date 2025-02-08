import runtime from "../../environment/runtime.ts";
// import { expect } from "@std/expect";

async function deployFixture() {
  const [owner] = runtime.clients;

  // Use runtime.tx to properly wait for the deployment
  const list = await runtime.deployContract("RadioOrchestration", []);
  const publicClient = runtime.publicClient;

  // Get the conversion value
  const cvf = await list.write.getConversion([0], {value: 1});
  console.log("why tf ",cvf);

  return {
    owner,
    list,
    publicClient,
  };
}

// Deployment

Deno.test("Should set deployer as owner", async () => {
  await deployFixture();
  
  // Add your assertions here
  // For example:
  // await expect(fixture.list.read.owner()).toBe(fixture.owner.account.address);
});
