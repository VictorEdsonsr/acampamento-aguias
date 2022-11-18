import Link from "next/link";

export const WhatsappButton = ({ children }) => {
  return (
    <Link
      href="https://wa.me/5521970937723"
      className="bg-green-600 font-semibold transition-all hover:bg-green-800 shadow-md p-3 text-center text-sm sm:text-md text-white rounded-md"
    >
      {children}
    </Link>
  );
};

export const ActionButton = ({ children, link }) => {
  return (
    <Link
      href={link}
      className="bg-amber-400 shadow-md transition-all hover:bg-amber-600 text-black mx-auto p-3 rounded-md"
    >
      {children}
    </Link>
  );
};
