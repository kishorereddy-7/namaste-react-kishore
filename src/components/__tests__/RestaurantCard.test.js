import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../__tests__/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard details={MOCK_DATA} />);

  const name = screen.getByText("Meraki");
  expect(name).toBeInTheDocument();
});
