import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/models.css'
import '../../css/powerEverything.css'
import '../../css/modelY.css'
import VideoBgAccessories from '../../assets/accessories-hero-desktop.mp4'

function Home() {
  return (
    <>
      <section className='fullSection homeModels'>
        <h2>Model S</h2>
        <p></p>
        <div>
          <Button variant='light' className='teslaButton teslaBtInverse'>Custom order</Button>
          <Button variant='light' className='teslaButton'>Existing inventory</Button>
        </div>
        <a href='#' className='teslaLink'>Visit a Store</a>
      </section>
      <section className='fullSection homePowerEverything'>
        <h2>Power Everything</h2>
        <p>Solar and Powerwall</p>
        <div>
          <Button variant='light' className='teslaButton'>Custom order</Button>
          <Button variant='light' className='teslaButton'>Existing inventory</Button>
        </div>
      </section>
      <section className='fullSection videoBgSection teslaAccessories'>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={VideoBgAccessories} type="video/mp4" />
        </video>
        <div class='contentOverlay'>
          <h2>Tesla Accessories</h2>
          <p></p>
          <div>
            <Button variant='light' className='teslaButton teslaBtInverse'>Shop Now</Button>
          </div>
        </div>
      </section>
      <section className='fullSection homeModelY'>
        <h2>Model Y</h2>
        <p></p>
        <div>
          <Button variant='light' className='teslaButton teslaBtInverse'>Order Now</Button>
        </div>
      </section>
    </>
  );
}

export default Home;
