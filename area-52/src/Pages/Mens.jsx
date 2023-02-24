import React from 'react'
import {
  Box, Flex, Select, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Grid, Img
} from "@chakra-ui/react"
import axios from "axios"
import "../CSS/Mens.css"

const Mens = () => {
  return (
    <div>
      <div className='side'>
        <Flex>
          <Box className='sidebar'>
            <Select>
              <option value=''>Select</option>
              <option value='option2'>High to Low</option>
              <option value='option3'>Low to High</option>
            </Select>
            <Accordion defaultIndex={[0]} allowMultiple>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Select Size
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
                  <Grid className='grid'>
                    <Box className='size'>6</Box>
                    <Box className='size'>7</Box>
                    <Box className='size'>8</Box>
                    <Box className='size'>9</Box>
                    <Box className='size'>10</Box>
                    <Box className='size'>11</Box>
                    <Box className='size'>12</Box>
                    {/* <Box className='size'>3</Box>
                  <Box className='size'>4</Box> */}

                  </Grid>
                </AccordionPanel>

              </AccordionItem>
            </Accordion>

            {/* ------------------------------ */}

            <Accordion defaultIndex={[0]} allowMultiple>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Select Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
                  <Grid className='grid'>
                    <Box className='size'>Red</Box>
                    <Box className='size'>Green</Box>
                    <Box className='size'>Blue</Box>
                    <Box className='size'>White</Box>
                    <Box className='size'>Pattern</Box>
                    <Box className='size'>Black</Box>
                    <Box className='size'>Gray</Box>
                  </Grid>
                </AccordionPanel>

              </AccordionItem>
            </Accordion>
            {/* ----------------------------------------- */}

            <Accordion defaultIndex={[0]} allowMultiple>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Select Style
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
                  <Grid className='grid'>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-03-256.png" /><h6>Clogs</h6></Box>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-02-128.png" /><h6>Sandals</h6></Box>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-22-128.png" /><h6>Midway</h6></Box>
                    <Box className='shadow'><Img src="https://thumbs.dreamstime.com/b/house-slipper-vector-icon-outline-isolated-white-background-logo-178962207.jpg" /><h6>Slides</h6></Box>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-31-512.png" /><h6>Halfway</h6></Box>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-06-128.png" /><h6>Chappal</h6></Box>
                    <Box className='shadow'><Img src="https://cdn4.iconfinder.com/data/icons/shoes-vol-2-add-on/48/v-05-512.png" /><h6>Slipper</h6></Box>
                  </Grid>
                </AccordionPanel>

              </AccordionItem>
            </Accordion>
          </Box>


        </Flex></div>
      <div></div>
    </div>
  )
}

export default Mens
