import { render, screen, fireEvent } from "@testing-library/react";
import AuthPage from "./AuthPage";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("Auth page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>,
    );
  });

  test("renders logo", () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders welcome message", () => {
    const message = screen.getByText(/добро пожаловать!/i);
    expect(message).toBeInTheDocument();
  });

  test("renders username input", () => {
    const input = screen.getByRole("textbox", { name: /имя пользователя/i });
    expect(input).toBeInTheDocument();
  });

  test("renders password input", () => {
    const input = screen.getByLabelText(/пароль/i);
    expect(input).toBeInTheDocument();
  });

  test("renders forgot password link", () => {
    const link = screen.getByRole("link", { name: /забыли пароль\?/i });
    expect(link).toBeInTheDocument();
  });

  test("renders login button", () => {
    const button = screen.getByRole("button", { name: /войти/i });
    expect(button).toBeInTheDocument();
  });

  test("renders show password button", () => {
    const button = screen.queryByRole("button", { name: "" });
    expect(button).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    const passwordInput = screen.getByLabelText(/Пароль/i);
    expect(passwordInput).toHaveAttribute("type", "password");
    const showPasswordButton = screen.getByRole("button", {
      name: "",
    });
    fireEvent.click(showPasswordButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    fireEvent.click(showPasswordButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
