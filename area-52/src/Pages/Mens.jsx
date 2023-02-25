import React from 'react'
import {
  Box, Flex, Select, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Grid, Img, GridItem, Button, SimpleGrid
} from "@chakra-ui/react"
import axios from "axios"
import "../CSS/Mens.css"
import { useState, useReducer, useEffect } from 'react'
import ProductsCard from '../component/ProductsCard';
import { useSearchParams } from 'react-router-dom'

const getCurrentPageUrl = (value) => {
  value = Number(value);
  if (typeof value == "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
}
const initstate = {
  products: [],
  isLoading: false,
  isError: false,

}

const reducer = (state, action) => {
  switch (action.type) {
    case "Request":
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case "Success":
      return {
        ...state,
        products: action.payload,
        isLoading: true,
        isError: false,
      }
    case "Failure":
      return {
        ...state,
        products: [],
        isLoading: true,
        isError: action.payload,
      }
    default:
      throw new Error();
  }
}


const Mens = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const [loading, setLoading] = useState(false);
  const { products, isLoading, isError } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(getCurrentPageUrl(searchParams.get("page") || 1));

  const [total, setTotal] = useState(0);
  const limit = 6;
  let lastPage = Math.ceil(total / limit);
  const [orderBy, setOrderBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const sort = "price";

  useEffect(() => {
    let apiUrl;
    if (orderBy) {
      apiUrl = `http://localhost:8080/mens?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderBy}`;
    }
    else if (filterBy) {
      apiUrl = `http://localhost:8080/mens?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderBy}&catagory=${filterBy}`;
    }
    else {
      apiUrl = `http://localhost:8080/mens?_page=${page}&_limit=${limit}`
    }

    setLoading(true);
    dispatch({ type: "Request" });
    axios.get(apiUrl).then((res) => {
      dispatch({ type: "Success", payload: res.data })
      setTotal(Number(res.headers.get("X-Total-Count")))
      console.log(res.data);
    })
      .catch((err) =>
        dispatch({ type: "Failure", payload: err.message })
      )
      .finally(() => setLoading(false));
  }, [page, orderBy, filterBy])

  useEffect(() => {
    let paramObj = { page, orderBy }
    if (orderBy) {
      paramObj.orderBy = orderBy;
    }
    if (filterBy) {
      paramObj.filterBy = filterBy;
    }
    setSearchParams(paramObj)
  }, [page, orderBy, filterBy])



  return (
    <>
      <Box className='main'>

        <Box className='sidebar'>


          <Button className='btn' value='hightolow'>High to Low</Button>
          {/* <br /> */}
          <Button className='btn' value='lowtohigh'>Low to High</Button>

          <Accordion defaultIndex={[0]} allowMultiple>

            <AccordionItem width='100%'>
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

            <AccordionItem width='100%'>
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
                <AccordionButton width='100%'>
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


        {/* style={{ marginLeft: '50px', marginTop: '100px' }} */}
        <Box className='prod'>
          <SimpleGrid columns={[1, 2, 3]} gap={2} >

            {
              products?.length &&
              products.map((e) => (
                <GridItem key={e.id}>
                  <ProductsCard
                    //style={{ marginTop: '40px', textAlign: 'left' }}
                    id={e.id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    description={e.description}
                  />

                </GridItem>
              ))}
          </SimpleGrid>
          <Box style={{ marginTop: '50px' }}>
          <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</Button>
          <Button>{page}</Button>
          <Button isDisabled={page === lastPage} onClick={() => setPage(page + 1)}>Next</Button>
          <Button onClick={() => setPage(1)}>Reset</Button>
        </Box>
        </Box>
        
      </Box>

      {/* <Box style={{ marginTop: '50px' }}>
          <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</Button>
          <Button>{page}</Button>
          <Button isDisabled={page === lastPage} onClick={() => setPage(page + 1)}>Next</Button>
          <Button onClick={() => setPage(1)}>Reset</Button>
        </Box> */}
    </>
  )
}

export default Mens
