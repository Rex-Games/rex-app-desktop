import { Container, Navbar as NextNavbar, Text } from '@nextui-org/react';
import Logo from '@/modules/Layout/Logo';

function Navbar(): JSX.Element {
  return (
    <Container>
      <NextNavbar isBordered={true} variant="sticky">
        <NextNavbar.Brand>
          <Logo />
          <Text b color="inherit" hideIn="xs">
            REX
          </Text>
        </NextNavbar.Brand>
        <NextNavbar.Content hideIn="xs" variant="underline-rounded">
          <NextNavbar.Link isActive href="#">
            Library
          </NextNavbar.Link>
          <NextNavbar.Link href="#">Store</NextNavbar.Link>
        </NextNavbar.Content>
      </NextNavbar>
    </Container>
  );
}

export default Navbar;
