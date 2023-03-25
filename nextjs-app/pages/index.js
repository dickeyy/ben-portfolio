import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Text } from '@chakra-ui/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>Benjha</title>
			<meta name="description" content="Freelance photographer / College student" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* <link rel="icon" href="images/seeds-logo-removebg.png" /> */}

			{/* //   <!-- Facebook Meta Tags --> */}
			{/* <meta property="og:url" content="https://seedsbot.xyz" /> */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Benjha" />
			<meta property="og:description" content="Freelance photographer / College student" />
			{/* <meta property="og:image" content="https://seedsbot/images/seeds-logo-removedbg.png" /> */}

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			{/* <meta property="twitter:domain" content="seedsbot.xyz" /> */}
			{/* <meta property="twitter:url" content="https://seedsbot.xyz" /> */}
			<meta name="twitter:title" content="Benjha" />
			<meta name="twitter:description" content="Freelance photographer / College student" />
			{/* <meta name="twitter:image" content="https://seedsbot/images/seeds-logo-removedbg.png" /> */}
		</Head>

		<Box
			w="100vw"
			h="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>

			<Box
				bgColor={"brand.purple.100"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.200"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.300"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.400"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.500"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.600"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.700"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.800"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>

			<Box
				bgColor={"brand.purple.900"}
				w="10vw"
				h="20vh"
				display="flex"
				justifyContent="center"
				borderRadius={10}
				alignItems="center"
				mr={2}
			/>
		
		</Box>

    </ChakraProvider>
  )
}
