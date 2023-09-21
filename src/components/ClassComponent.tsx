import { Component } from "react";

// abbiamo tipizzato le props del componente a classe
// una delle proprietà è opzionale, significa che nell'utilizzare il nostro ClassComponent possiamo SCEGLIERE se usare subtitle oppure no

interface ClassComponentProps {
  title: string;
  subtitle?: string;
}

interface ClassComponentState {
  counter: number;
}

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    counter: 0
  };

  render() {
    return (
      <div className="mt-5" style={{ marginTop: "3rem" }}>
        <span>{this.state.counter}</span>
        <h1>This is a class Component — {this.props.title.toLocaleUpperCase()}</h1>
        {this.props.subtitle && <p>{this.props.subtitle}</p>}

        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+1</button>
      </div>
    );
  }
}
export default ClassComponent;
