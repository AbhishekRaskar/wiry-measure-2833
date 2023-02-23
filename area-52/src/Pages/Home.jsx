import React from 'react'
import HomeNav from '../component/HomeNav'
import "../CSS/navbar.css"
import { MdLocalShipping } from "react-icons/md";
import { VscPackage, VscWorkspaceTrusted } from "react-icons/vsc";


const Home = () => {
  return (
    <>
      <div>
        <img className='bigImg' src="https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/09/p-1-the-cult-of-croc-can-the-brand-make-a-comeback-by-fighting-its-haters.jpg" alt="" />
        <HomeNav />

        <div className='Cards'>
          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-classic/Crocs" alt="" />
            <h5>Classic</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-fuzz-lined/Crocs" alt="" />
            <h5>Fuzz Lined</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-platform/Crocs" alt="" />
            <h5>Platforms</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-sandal/Crocs" alt="" />
            <h5>Sandals</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-glitter/Crocs" alt="" />
            <h5>Glitters</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Dektophp-category-carousel-jibbitz/Crocs" alt="" />
            <h5>Jibbits</h5>
          </div>

        </div>
        <hr />

        <img className='bigImg2' src="https://th.bing.com/th/id/R.bd4f34c127dc0815d817374247cf36c4?rik=QGkTqtoLsPh%2biA&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f52c17f45ecad044d281cf3ee%2fcrocs-have-a-bright-future--in-europe.jpg&ehk=3GBTpkamwzGP9A0skF6Y1XchBMzO6K3vrYkXfyyIQNk%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <br />
        <br />
        <img className='bigImg2' src="https://footwearnews.com/wp-content/uploads/2015/03/crocs.jpeg" alt="" />

        <h2>ONLINE EXCLUSIVE STYLES</h2>
        <div className='Cards'>
          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208728_001_ALT100/crocs" alt="" />
            <p>4 colors</p>
            <h5>Mellow Slide</h5>
            <p>₹1200</p>
          </div>

          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208392_4SS_ALT100/crocs" alt="" />
            <p>2 colors</p>
            <h5>Brooklyn Slide</h5>
            <p>₹1900</p>
          </div>

          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207946_7C1_ALT100/crocs" alt="" />
            <p>4 colors</p>
            <h5>Crush Boot</h5>
            <p>₹2200</p>
          </div>

          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208727_2Y2_ALT100/crocs" alt="" />
            <p>6 colors</p>
            <h5>Brooklyn Flip</h5>
            <p>₹2999</p>
          </div>

          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208446_5Q6_ALT100/crocs" alt="" />
            <p>2 colors</p>
            <h5>Furever Crush Shoe</h5>
            <p>₹1200</p>
          </div>

          <div><img src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208243_2Y3_ALT100/crocs" alt="" />
            <p>3 colors</p>
            <h5>Classic print Flip</h5>
            <p>₹1199</p>
          </div>
        </div>
        <hr />
        <img className='bigImg2' src="https://live.staticflickr.com/3073/2380604865_fd86164e6b_b.jpg" alt="" />
        <h2>Popular Collection</h2>
        <div className='Cards'>
          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Minecraft-Carousel%20-Tile-2023-Desktop/Crocs" alt="" />
            <h5>MineCraft</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Disney-Carousel-Tile-2023-Desktop/Crocs" alt="" />
            <h5>Disney</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Marvel-Carousel%20-Tile-2023-Desktop/Crocs" alt="" />
            <h5>Marvel</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/Pokemon-Carousel%20-Tile-2023-Desktop/Crocs" alt="" />
            <h5>Pokemon</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/StarWars-Tile-Desktop-radius-test/Crocs" alt="" />
            <h5>Star Wars</h5>
          </div>

          <div><img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/HarryPotter-Carousel-Tile-2023-Desktop/Crocs" alt="" />
            <h5>Harry Potter</h5>
          </div>
        </div>
        <hr />
        <div className='footer'>
          <div>
            <div>
              <h3>JOIN CROCS CLUB & GET 15% OFF YOUR NEXT PURCHASE</h3>
              <button>Sign Up</button>
            </div>
            <div>
              <h3>DOWNLOAD THE CROCS APP</h3>
              <div>
                <img className='app' src="	https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="App Store" />
              </div>
              <div>
                <img className='app' src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="Google Play" />
              </div>
            </div>
          </div>
          <div className='four'>

            <div>
              <h2>Crocs Insiders</h2>

              <a>Crocs Club</a>
              <a>Collaborations & Limited Editions</a>
              <a>Military Discount</a>
              <a>Student Discount</a>
              <a>Healthcare Discount</a>

            </div>
            <div>
              <h2>Company</h2>

              <a>About Crocs</a>
              <a>Crocs Purpose</a>
              <a>Careers</a>
              <a>Custom Orders</a>
              <a>Investor Relations</a>

            </div>
            <div>
              <h2>Help</h2>

              <a>Order Status & Returns</a>
              <a>FAQ's</a>
              <a>Size Chart</a>
              <a>Accessibility</a>
              <a>Caring for your Crocs</a>

            </div>
          </div>
          <hr />
          <p>Privacy Preferences | Terms | Privacy (Updated 2/1/20) | Ad Choices | Do Not Sell My Personal Information | CA Supply Chains Act
            © 2023 Crocs Retail, LLC</p>
        </div>

      </div>
    </>
  )
}

export default Home
