import styled from 'styled-components'
import GlobalStyle from './components/BlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <CalculatorGrid>
        <Output>
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </Output>
        <SpanTwo>AC</SpanTwo>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <SpanTwo>=</SpanTwo>
      </CalculatorGrid>
    </>
  )
}

export default App

const CalculatorGrid = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);

  button {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    background-color: rgba(255, 255, 255, .75);

    &:hover, &:focus {
      background-color: rgba(255, 255, 255, .9);
    }
  }
`

const SpanTwo = styled.button`
  grid-column: span 2;
`

const Output = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, .75);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: .75rem;
  word-wrap: break-word;
  word-break: break-all;

  .previous-operand {
    color: rgba(255, 255, 255, .75);
    font-size: 1.5rem;
  }

  .current-operand {
    color: white;
    font-size: 2.5rem;
  }
`
