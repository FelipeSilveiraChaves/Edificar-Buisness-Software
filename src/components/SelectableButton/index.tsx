import { SelectableButtonContainer, AmountDiv } from './styles'

interface SelectableButtonProps {
  title: string
  selected: boolean
  amount: number
  onClick: () => void
}

export function SelectableButton({
  title,
  selected = false,
  amount,
  onClick,
  ...rest
}: SelectableButtonProps) {
  return (
    <SelectableButtonContainer
      type="button"
      selected={selected}
      onClick={onClick}
      {...rest}
    >
      <div>
        <p>{title}</p>
        <AmountDiv>{amount}</AmountDiv>
      </div>
    </SelectableButtonContainer>
  )
}
