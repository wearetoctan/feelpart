import Logo from '../public/feelpart.svg'

export default function Header() {
  return (
    <header className="py-8 mb-6 flex justify-between relative z-10">
      <Logo alt="feelpart" className="w-28 ml-1" />

      <div className="flex gap-8">
        <a className="font-semibold">Log in</a>
        <a className="font-semibold">Sign up</a>
      </div>
    </header>
  )
}
