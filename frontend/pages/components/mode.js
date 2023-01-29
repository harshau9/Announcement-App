import { useColorMode, Button } from "@chakra-ui/react";
function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <header style={{border:"10px solid red",display:"flex",justifyContent:"flex-end",marginTop:"20px",width:"auto"}}>
    <Button
      onClick={toggleColorMode}
      style={{ backgroundColor: "gray", color: "white" }}
    >
      Theme {colorMode === "light" ? "Dark" : "Light"}
    </Button>
    // </header>
  );
}
export default Example;
