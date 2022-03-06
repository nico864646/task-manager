import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface AuthButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
  styles: string
  children?: ReactNode;
  noRender?: boolean
}

function AuthButton({styles, children, noRender, ...rest }: AuthButtonProps) {
  return noRender ? null : (
      <Container 
        {...rest}
        className={styles}
      >
        {children}
      </Container>
  );
};

export default AuthButton;
