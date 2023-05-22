import { render, screen } from "@testing-library/react";
import App from "./index";

describe("TEST APP", () => {
  test("check logo", () => {
    render(<App />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
  test("check title", () => {
    render(<App />);
    const title = screen.getByText(/добро пожаловать/i);
    expect(title).toBeInTheDocument();
  });
  test("check input", () => {
    render(<App />);
    const usernameLabel = screen.getByLabelText(/имя пользователя/i);
    const usernameInput = screen.getByPlaceholderText(/имя пользователя/i);
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  });
  test("check input password", () => {
    render(<App />);
    const passwordLabel = screen.getByLabelText(/пароль/i);
    const passwordInput = screen.getByPlaceholderText(/пароль/i);
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  test("check forgot password link", () => {
    render(<App />);
    const forgotPassword = screen.getByText(/забыли пароль?/i);
    expect(forgotPassword).toBeInTheDocument();
  });
});
