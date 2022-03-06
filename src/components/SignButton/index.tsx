import { useSession, signOut, signIn } from "next-auth/react"
import { Container } from './styles';
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

function SignButton() {

  const { data: session, status } = useSession()
  
  return (
    <Container onClick={status == 'unauthenticated' ? () => signIn('github') : undefined}>
      {status === 'authenticated' && (
        <>
          <img src={session.user?.image ?? undefined} 
               alt="Imagem do usuário" 
               className="user-image"
          />
          <p className="user-name">{session.user?.name}</p>
          <FiX className="close-icon" onClick={() => signOut()} />
        </>
      )}
      {status === 'unauthenticated' && (
            <p className="git-login-label">Entre com GitHub<FaGithub className="git-login-logo" /></p>
      )}
      </Container >
      )
}

export default SignButton;
