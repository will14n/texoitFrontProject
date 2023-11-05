import { render, screen } from "@testing-library/react"
import { Card } from "../Card"

describe('Card Component', () => {
  it('renders the title correctly', () => {
    const title = 'Sample Title';
    render(<Card title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the children correctly', () => {
    const childrenContent = 'Sample Content';
    render(
      <Card title="Title">
        <div>{childrenContent}</div>
      </Card>
    );
    const childrenElement = screen.getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });
});