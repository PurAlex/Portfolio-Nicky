function Footer() {
  return (
    <footer className=" bg-gray-800 p-4 flex flex-col items-center">
      <aside>
        <p className="text-white">
          © {new Date().getFullYear()} Nicky Alexader Portfolio
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
