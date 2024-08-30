
import {Box} from "@chakra-ui/react"
import CodeEditor from "./components/CodeEditor"
import Footer from "./components/Footer"

function App() {

  return (
    
    <Box minH="100vh" bg='#0f0a19' color='gray.500' px={6} py={6}>
      <Box fontSize='3xl' mb={2} color="blue.300" textAlign={['left','center']}>BurNCode</Box>
      <CodeEditor/>
      <Footer/>
    </Box>
  )
}

export default App


/* Chakra-ui for css 
  Piston Api for code editor
  https://github.com/nikitadev-yt/react-code-editor-app/blob/main/src/components/Output.jsx
*/
