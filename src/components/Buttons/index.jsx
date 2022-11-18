import Link from "next/link";

export const WhatsappButton = ({ children }) => {
  return (
    <Link
      href="https://wa.me/5521970937723"
      className="bg-green-600 font-semibold p-3 text-center text-md sm:text-xl text-white rounded-md"
    >
      {children}
    </Link>
  );
};

export const ActionButton = ({ children, link }) => {
  return (
    <Link href={link} className="bg-amber-400 text-black p-3 rounded-md">
      {children}
    </Link>
  );
};
