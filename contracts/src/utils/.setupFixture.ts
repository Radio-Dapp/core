import runtime from "../../environment/runtime.ts";

export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;
  await runtime.sleep(1);

  return {
    owner,
    acc1,
    acc2,
  };
}
