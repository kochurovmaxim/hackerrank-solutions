import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ItemListManagerPage } from "./ItemListManagerPage";

describe("Item List Manager", () => {
  const getInput = () => screen.getByRole("textbox");
  const getAddButton = () => screen.getByRole("button", { name: /add/i });

  const addItem = async (text: string) => {
    await userEvent.type(getInput(), text);
    await userEvent.click(getAddButton());
  };

  beforeEach(() => {
    render(<ItemListManagerPage />);
  });

  it("adds item to the list when button is clicked", async () => {
    const testItem = "Test Item";
    await addItem(testItem);
    expect(screen.getByText(testItem)).toBeInTheDocument();
  });

  it("input field is cleared after adding an item", async () => {
    await addItem("Test Item");
    expect(getInput()).toHaveValue("");
  });

  it("it adds a normal item but does not add empty item to the list", async () => {
    await addItem("Test Item");

    expect(getInput()).toHaveValue("");

    await addItem(" ");

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(1);
  });

  it("adds multiple items to the list", async () => {
    const items = ["First Item", "Second Item"];

    for (const item of items) {
      await addItem(item);
    }

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(items.length);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
