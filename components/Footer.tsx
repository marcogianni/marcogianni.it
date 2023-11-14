export default function Footer() {
  return (
    <footer className="py-4 px-6 flex justify-between">
      <div className="text-md dark:text-white font-medium tracking-wider ">
        marcogianni
        <span className="font-bold pl-[1px] text-transparent bg-clip-text bg-gradient-to-r to-primary from-purple-500">
          .it
        </span>
      </div>
      <div className="">
        <a
          href="https://www.buymeacoffee.com/marcogianni.it"
          target="_blank"
          className="dark:text-white"
          rel="noopener noreferrer"
        >
          Buy me a coffe
        </a>
      </div>
    </footer>
  );
}
