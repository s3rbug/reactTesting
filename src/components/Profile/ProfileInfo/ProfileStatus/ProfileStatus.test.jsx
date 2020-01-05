import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import { updateStatus } from "./../../../../redux/profileReducer";

const testString = "TEST_STRING";
const mockCallback = jest.fn(updateStatus);
const component = create(
  <ProfileStatus status={testString} updateStatus={mockCallback} />
);
const root = component.root;

describe("ProfileStatus Component", () => {
  test("status should be in props", () => {
    const instance = component.getInstance();
    expect(instance.state.status).toBe(testString);
  });

  test("after creation <span> with status should be displayed with correct status", () => {
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe(testString);
  });

  test("after creation <span> with status should be displayed", () => {
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("input should be displayed in edit mode instead of span", () => {
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe(testString);
  });

  test("callback should be called", () => {
    const instance = component.getInstance();
    for (let i = 0; i < 9; ++i) instance.toggleEditMode();
    expect(mockCallback.mock.calls.length).toBe(10);
  });
});
