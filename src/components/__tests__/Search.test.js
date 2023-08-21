import "@testing-library/jest-dom";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component test", () => {
  it("Should render the Body Component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();
  });

  it("Should render the Body Component with Search Eatfit", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "EatFit" } });

    fireEvent.click(searchBtn);

    const resItems = screen.getAllByTestId("res-card");

    expect(resItems.length).toBe(2);
  });
});
