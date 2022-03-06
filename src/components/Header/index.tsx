import Link from 'next/link';
import SignButton from '../SignButton';
import { useSession } from 'next-auth/react';
import { Container, Content, Nav, Button } from './styles';

function Header() {

  const {data: session} = useSession()
  
  return (
    <Container>
      <Content>
        <Link href={"/"}>
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <Nav>
          <Link href={"/"}>
            <Button>Home</Button>
          </Link>
          {session ? 
            <Link href={"/tarefas"}>
              <Button>Tarefas</Button>
            </Link>
            :
            null
          }
        </Nav>

        <SignButton/>
      </Content>
    </Container>
  );
};

export default Header;
