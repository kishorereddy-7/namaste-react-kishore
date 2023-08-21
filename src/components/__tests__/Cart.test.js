import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../components/utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordin = screen.getByText(/Recommended/);

  fireEvent.click(accordin);

  const foodItems = screen.getAllByTestId("food-items");

  expect(foodItems.length).toBe(95);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart (1 items)");

  expect(cartItem).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items").length).toBe(96);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("food-items").length).toBe(95);
});
