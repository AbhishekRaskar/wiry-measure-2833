import React from 'react'
import {Box} from '@chakra-ui/react'
import "../CSS/Footer.css"
const Footer = () => {
    return (
        <Box className='footer'>
            <Box>
                <Box>
                    <h3>JOIN CROCS CLUB & GET 15% OFF YOUR NEXT PURCHASE</h3>
                    <button>Sign Up</button>
                </Box>
                <Box>
                    <h3>DOWNLOAD THE CROCS APP</h3>
                    <Box>
                        <img className='app' src="	https://cdn1.cronometer.com/2021/landing/ios-icon.svg" alt="App Store" />
                    </Box>
                    <Box>
                        <img className='app' src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" alt="Google Play" />
                    </Box>
                </Box>
            </Box>
            <Box className='four'>

                <Box>
                    <h2>Crocs Insiders</h2>

                    <a>Crocs Club</a>
                    <a>Collaborations & Limited Editions</a>
                    <a>Military Discount</a>
                    <a>Student Discount</a>
                    <a>Healthcare Discount</a>

                </Box>
                <Box>
                    <h2>Company</h2>

                    <a>About Crocs</a>
                    <a>Crocs Purpose</a>
                    <a>Careers</a>
                    <a>Custom Orders</a>
                    <a>Investor Relations</a>

                </Box>
                <Box>
                    <h2>Help</h2>

                    <a>Order Status & Returns</a>
                    <a>FAQ's</a>
                    <a>Size Chart</a>
                    <a>Accessibility</a>
                    <a>Caring for your Crocs</a>

                </Box>
            </Box>
            <hr />
            <p>Privacy Preferences | Terms | Privacy (Updated 2/1/20) | Ad Choices | Do Not Sell My Personal Information | CA Supply Chains Act
                © 2023 Crocs Retail, LLC</p>
        </Box>
    )
}

export default Footer
