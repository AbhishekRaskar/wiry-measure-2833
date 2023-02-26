import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Text, Button, Heading, CardBody, Stack, Card, Box, Center, UnorderedList, ListItem, Flex } from '@chakra-ui/react';
import "../CSS/singleproduct.css"
const getData = (url) => {
    return fetch(url)
        .then((res) => res.json())
}

function SingleProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [single, setSingle] = useState({});
    const { id } = useParams();

    const fetchAndRender = () => {
        setLoading(true);
        getData(`http://localhost:8080/womens/${id}`)
            .then((res) => {
                console.log(res.data)
                setSingle(res)
            })
            .catch((err) => {
                console.log(err)
                setError(true)
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAndRender();
    }, []);
    console.log(single)


    return loading ? (
        <h1>Loading.....</h1>
    ) : error ? (
        <h1>Something went wrong...</h1>
    ) : (
        <Center className="single">
            {/* <h1>single page</h1> */}
            <Box w='100%'  >
                <Card
                    // direction={{ base: 'column', sm: 'row' }}
                    // overflow='hidden'
                    // variant='outline'
                    display={'Flex'}
                >
                    <Box className="Dis">
                        <Image
                            // objectFit='cover'
                            // maxW={{ base: '100%', sm: '200px', w: '100%' }}
                            src={single?.image}
                            alt={single?.name}
                            style={{ width: '100%' }}
                        />

                        <Box>
                            <Stack>
                                <CardBody>
                                    <Heading as='h1' fontFamily='commuter sans, Verdana' fontSize='28px' fontWeight='600' size='md'>{single?.name}</Heading>
                                    <br />
                                    <Text size='sm' textAlign={"left"}>₹{single?.price}</Text>

                                    <Text py='2' textAlign={"left"}>{single?.description}</Text>

                                    <br />
                                    <Center>
                                        <Button height='48px' width='200px' backgroundColor='black' color="white">
                                            Add To Bag
                                        </Button>
                                    </Center>
                                    <br />
                                    {/* </CardFooter> */}
                                    <Heading as='h4' size='md' textAlign={"left"}>PRODUCT DETAILS</Heading>
                                    <Text textAlign={"left"}>6 MONTH QUALITY GUARANTEE</Text>
                                    <Text fontSize='sm' fontStyle={"italic"} textAlign={"left"}>Product code: SHL0209BLK</Text>
                                    <Text fontSize='sm' textAlign={"left"}>Our Oxford shoes have all of the features of the much-loved traditional design, while keeping your comfort in mind. Crafted in England, the style is made from quality calf leather with a Goodyear welted construction for a breathable and long-lasting finish. Inside, we've added flexible leather insoles to put a spring in your step and EVA foam filler to mould to your feet. There's also a half-leather insock, which provides extra support with each step.</Text>
                                </CardBody>
                                <UnorderedList>
                                    <ListItem marginLeft={20} textAlign={"left"}>100% leather</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>100% leather lining with a half leather in sock</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>Lasted and finished in England</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>Goodyear welted construction</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>Leather soles with scalloped embossing to add comfort and flexibility</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>EVA foam filler moulds to your foot</ListItem>
                                    <ListItem marginLeft={20} textAlign={"left"}>Specialist shoe care products</ListItem>
                                </UnorderedList>

                            </Stack>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Center>
    );
}

export default SingleProduct;