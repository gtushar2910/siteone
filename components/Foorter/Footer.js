import React from 'react';

const Footer = () => {
  return (
    <footer
      className="
        w-full
        mt-auto
        py-4
        text-center
        font-sans
        text-sm
        bg-[var(--card-bg)]
        text-[var(--foreground-color)]
        border-t border-[var(--card-border)]
        shadow-inner
      "
    >
      <p className="opacity-80">
        Designed & Maintained by
        <span className="font-semibold text-[var(--accent-primary)]">
          {" "}
          Prof. Tushar Gohil
        </span>
        , Information Technology Department, SCET, Surat.
      </p>
    </footer>
  );
};

export default Footer;
