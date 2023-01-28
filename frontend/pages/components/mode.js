import { useColorMode,Button } from "@chakra-ui/react"
function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode} style={{backgroundColor:"gray"}} >
          Theme {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
  }
  export default Example