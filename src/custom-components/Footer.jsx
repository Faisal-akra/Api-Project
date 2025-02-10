import { FacebookIcon, Instagram, Linkedin,  TwitchIcon  } from "lucide-react";


function Footer() {
  return(
    <>
    <footer className="flex justify-between border border-black bg-black text-white items-center  mt-auto  ">

  <div>
    <h1>Faisal-Electronics</h1>
    <h2>Subscribe</h2>
    <p>Get 10% off your first order</p>
    <input type="email" placeholder="Enter your email" />
  </div>

  <div>
    <h1>Support</h1>
    <h2>Main saddar bazar peshawar pakistan</h2>
    <p>zjan45097@gmail.com</p>
    <p>03149061501</p>
  </div>
  
  <div>
    <h1>Account</h1>
    <h1>My-Account</h1>
  </div>

  <div>
    <h1>Quick Link</h1>
    <h2>Privancy Policy</h2>
    <p>Terms and Conditions</p>
  </div>


  <div className="flex items-center gap-2">
  <h1>Download App</h1>

    <FacebookIcon/>
    <TwitchIcon/>
    <Instagram/>
    <Linkedin/>
  </div>
</footer>
    </>
  )
}

export default Footer;
