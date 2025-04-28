import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <h1 className="p-2 text-white">Hello from About!</h1>
}
