import { Box, Grid, Link, Image } from '@chakra-ui/react';
import DemoCard1 from "#/assets/DemoCard1.png"; 
import DemoCard2 from "#/assets/DemoCard2.png"; 
import DemoCard3 from "#/assets/DemoCard3.png"; 
import DemoCard4 from "#/assets/DemoCard4.png"; 
import DemoCard5 from "#/assets/DemoCard5.png"; 
import DemoCard6 from "#/assets/DemoCard6.png"; 
import DemoCard7 from "#/assets/DemoCard7.png"; 
import DemoCard8 from "#/assets/DemoCard8.png"; 
import DemoCard9 from "#/assets/DemoCard9.png"; 
import DemoCard10 from "#/assets/DemoCard10.png"; 
import DemoCard11 from "#/assets/DemoCard11.png"; 
import DemoCard12 from "#/assets/DemoCard12.png"; 

const LandingPage = () => {
    const cards = [
        { image: DemoCard1 , link: '/' },
        { image: DemoCard2, link: '/' },
        { image: DemoCard3, link: '/' },
        { image: DemoCard4, link: '/' },
        { image: DemoCard5, link: '/' },
        { image: DemoCard6, link: '/' },
        { image: DemoCard7, link: '/' },
        { image: DemoCard8, link: '/' },
        { image: DemoCard9, link: '/' },
        { image: DemoCard10, link: '/' },
        { image: DemoCard11, link: '/' },
        { image: DemoCard12, link: '/' },
    ];

    return (
        <Box p="4">
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                {cards.map((card, index) => (
                    <Box key={index}>
                        <Link href={card.link}>
                            <Image w="100%" src={card.image} borderRadius="lg" />
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default LandingPage;
