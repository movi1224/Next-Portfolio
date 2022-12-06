import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      {children}
    </div>
  )
}
