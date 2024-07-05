import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerCss">
      <h2 className="text-center">©2023 All right reserved</h2>
      <div className="flex justify-center">
        <div className="mr-5">
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
