import { h, render, Component } from 'preact';

const container = document.getElementById('root');

class ScorchBookmarks extends Component {
  render() {
    return <h1>testing 123</h1>;
  }
}

render(<ScorchBookmarks />, container, container.lastChild);
