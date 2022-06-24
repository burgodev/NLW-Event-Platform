import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center w-full py-5 bg-gray-700 border-b border-gray-600">
        <a href="/">
          <Logo />
        </a>
      </header>
    </>
  );
};

export default Header;
