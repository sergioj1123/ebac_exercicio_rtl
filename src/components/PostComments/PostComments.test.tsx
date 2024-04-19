import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
  it("Deve renderizar 2 comentarios", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "comentario 1",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Comentario 2",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    expect(screen.getAllByTestId("comment-element")).toHaveLength(2);
  });
});
