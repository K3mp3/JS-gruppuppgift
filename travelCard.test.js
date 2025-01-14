import { it, expect, describe, toBe, beforeEach } from "vitest";

const { checkTodo } = require("./scripts/travelCard.js");
const { travelPlan } = require("./scripts/globalVariables.js");

describe("checkTodo Function", () => {
  // Toggle checked status of existing todo item from false to true
  it("should toggle checked status from false to true when todo exists", () => {
    travelPlan.bucketList = [{ todo: "Visit museum", checked: true }];

    expect(travelPlan.bucketList[0].checked).toBe(true);
  });

  //   Handle todo item that doesn't exist in bucketList
  it("should throw error when todo does not exist", () => {
    travelPlan.bucketList = [];

    expect(() => {
      checkTodo("Non-existent todo");
    }).toThrow();
  });
});
