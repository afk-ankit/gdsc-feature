import "./FooterAnkit.css";
import SendIcon from "@mui/icons-material/Send";
const FooterAnkit = () => {
  return (
    <div className="footer">
      <div className="logoContainer">
        <img src="assests/footer/gdsc_logo.png" alt="" />
        <h3>Google Developer Student Club</h3>
        <h4>Tezpur University</h4>
      </div>
      <div className="navContainer">
        <h4>Get Connected</h4>
        <div>
          <input type="text" name="" id="" placeholder="Enter Email" />
          <SendIcon
            sx={{
              fontSize: "3rem",
              color: "#4285F4",
            }}
          />
        </div>
      </div>
      <div className="footerLinks">
        <h2>Follow Us</h2>
        <div>
          <a href="">
            <img src="/assests/footer/insta.png" alt="" />
          </a>
          <a href="">
            <img src="/assests/footer/linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="/assests/footer/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterAnkit;
