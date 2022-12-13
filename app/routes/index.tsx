import type { MetaFunction } from '@remix-run/node'
import { Calculator } from '~/modules/calculator'

export const meta: MetaFunction = () => {
  return {
    title: 'Calculator',
    description: 'A calculator with basic arithmetic functionality.',
  }
}

const Index = () => {
  return (
    <main>
      <div className="space-y-4 p-4">
        <h1 className="mt-10 text-center text-2xl">Calculator</h1>
        <Calculator />
      </div>
    </main>
  )
}

export default Index
