import { Container, Navbar as NextNavbar, Text } from '@nextui-org/react';
import Logo from '@/components/Layout/Logo';

function Navbar(): JSX.Element {
  return (
    <Container>
      <NextNavbar isBordered={true} variant="sticky">
        <NextNavbar.Brand>
          <Logo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </NextNavbar.Brand>
        <NextNavbar.Content hideIn="xs" variant="underline-rounded">
          <NextNavbar.Link href="#">Features</NextNavbar.Link>
          <NextNavbar.Link isActive href="#">
            Customers
          </NextNavbar.Link>
          <NextNavbar.Link href="#">Pricing</NextNavbar.Link>
          <NextNavbar.Link href="#">Company</NextNavbar.Link>
        </NextNavbar.Content>
      </NextNavbar>
    </Container>
  );
}

export default Navbar;
