import { render, screen } from "@testing-library/react";
import Colour from "./Colour";

describe("the app should render three button", () => {
    it("should render a red button", () => {
        render(<Colour />);
        const redButton = screen.getByText("Red");
        expect(redButton).toBeInTheDocument();
    });

    it("should render a green button", () => {
        render(<Colour />);
        const greenButton = screen.getByText("Green");
        expect(greenButton).toBeInTheDocument();
    });

    it("should render a blue button", () => {
        render(<Colour />);
        const blueButton = screen.getByText("Blue");
        expect(blueButton).toBeInTheDocument();
    });
})