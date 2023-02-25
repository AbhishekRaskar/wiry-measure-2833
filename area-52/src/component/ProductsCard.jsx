import React from 'react'
import { Box, Image, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom"

const ProductsCard = ({ id, description, name, image, price }) => {
    return (

        <RouterLink to={`/mens/${id}`}>
            <Box>
                <Box maxW="md" borderWidth="1px" borderRadius="2xl" overflow="hidden">
                    <Image src={image} alt={'kl'} />

                    <Box p="6">
                        <Box>
                            {name}
                        </Box>

                        {/* <Box>
                            {description}
                        </Box> */}
                        <Box>
                            ₹{price}

                        </Box>


                        {/* style={{ textDecoration: 'underline' }} */}
                        <Box >
                            <Link to={`/mens/${id}`}>More Detail</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </RouterLink>

    )
}

export default ProductsCard