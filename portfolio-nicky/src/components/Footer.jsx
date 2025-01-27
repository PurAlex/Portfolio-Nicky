function Footer() {
  return (
    <footer className=" footer bg-gray-800 text-base-content p-4 mt-auto flex flex-col items-center">
      <aside>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - Nicky Alexader Portfolio
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
