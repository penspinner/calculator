import * as React from 'react'
import clsx from 'clsx'

const calculatorButtons = [7, 8, 9, '÷', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+'] as const

export const Calculator = () => {
  const [state, send] = React.useReducer(calculatorReducer, initialCalculatorState)
  return (
    <div className="mx-auto max-w-md rounded-lg border border-slate-600 bg-slate-800 p-4">
      <div className="flex h-16 items-center justify-end overflow-auto rounded bg-slate-100 p-3 text-3xl text-slate-700">
        {state.operand2 || state.operand}
      </div>
      <div className="mt-6 space-y-2">
        <div className="grid grid-cols-1 gap-2">
          <CalculatorButton onClick={() => send('AC')}>AC</CalculatorButton>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {calculatorButtons.map((value) => (
            <CalculatorButton key={value} onClick={() => send(value)}>
              {value}
            </CalculatorButton>
          ))}
        </div>
      </div>
    </div>
  )
}

const CalculatorButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded border border-transparent bg-slate-100 px-2.5 py-1.5 text-2xl font-medium text-slate-700 shadow-sm hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-700',
        className,
      )}
      type="button"
      {...props}
    />
  )
}

type CalculatorState = {
  operator: '+' | '-' | 'x' | '÷' | undefined
  operand: string
  operand2: string
}
type CalculatorAction = typeof calculatorButtons[number] | 'AC'

const initialCalculatorState: CalculatorState = {
  operator: undefined,
  operand: '',
  operand2: '',
}

const evaluateCalculator = (state: CalculatorState): CalculatorState => {
  if (state.operand === '' || state.operand2 === '' || state.operator === undefined) {
    // We only want to evaluate when all of state is present.
    return state
  }

  switch (state.operator) {
    case '+': {
      return {
        operand: `${Number(state.operand) + Number(state.operand2)}`,
        operator: undefined,
        operand2: '',
      }
    }
    case '-': {
      return {
        operand: `${Number(state.operand) - Number(state.operand2)}`,
        operator: undefined,
        operand2: '',
      }
    }
    case 'x': {
      return {
        operand: `${Number(state.operand) * Number(state.operand2)}`,
        operator: undefined,
        operand2: '',
      }
    }
    case '÷': {
      return {
        operand: `${Number(state.operand) / Number(state.operand2)}`,
        operator: undefined,
        operand2: '',
      }
    }
  }
}

const calculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
  switch (action) {
    case '-':
    case 'x':
    case '÷':
    case '+': {
      if (state.operand === '') {
        // User has not yet pressed a number yet, so pressing an operator does nothing.
        return state
      }

      if (state.operand2 !== '') {
        return { ...evaluateCalculator(state), operator: state.operator }
      }

      return { ...state, operator: action }
    }
    case 'AC': {
      return initialCalculatorState
    }
    case '=': {
      return evaluateCalculator(state)
    }
    case '.':
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: {
      if (state.operator === undefined) {
        if (action === '.' && state.operand.includes('.')) {
          return state
        }

        const newOperand = `${state.operand}${action}`
        return { ...state, operand: newOperand }
      }

      if (action === '.' && state.operand2.includes('.')) {
        return state
      }

      const newOperand2 = `${state.operand2}${action}`
      return { ...state, operand2: newOperand2 }
    }
    default: {
      return state
    }
  }
}
