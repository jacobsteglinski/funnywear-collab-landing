export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center border-t border-black/5">
      <p className="text-sm text-gray-500">
        © FunnyWear ·{' '}
        <a
          href="https://funnywear.pl"
          className="hover:text-brand-orange transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          funnywear.pl
        </a>
      </p>
    </footer>
  )
}
