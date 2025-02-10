import hero from "../assets/Hero/Frame 560.png"


function Hero() {
  return(
    <div>
      <div className="mb-10 p-2">  

<img src={hero}
 alt="Hero"
 style={{width: '100%', height: '400px'}} 
  />

</div>
    </div>
  )
}

export default Hero;