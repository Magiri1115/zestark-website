export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <small className="footer-copy">&copy; {year} Zestark. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
