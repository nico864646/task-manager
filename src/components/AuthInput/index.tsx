import { Container } from './styles';

interface AuthInputProps {
  label: string
  type: string
  value: any
  hasRender?: boolean
  required?: boolean
  onValueChange: (changedValue: any) => void
}

function AuthInput(
  { label, type, value, onValueChange, required, hasRender }: AuthInputProps
) {
  return hasRender ? null : (
    <Container>
      <label htmlFor="">{label}</label>
      <input
        type={type} 
        value={value}
        onChange={e => onValueChange?.(e.target.value)}
        required={required}
      />
    </Container>
  )
};

export default AuthInput;
