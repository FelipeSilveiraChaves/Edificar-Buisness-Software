import { useState } from 'react'

import { NumericFormat } from 'react-number-format'
import {
  OverlayContainer,
  OverlayContent,
  CreateReceiptButton,
  CancelButton,
} from './styles'

interface ReceitpModalProps {
  onClickToClose: () => void
}

export function ReceiptModal({ onClickToClose }: ReceitpModalProps) {
  const [currency, setCurrency] = useState('')

  const newReceiptJSON = {
    value: '',
  }

  const handleCloseModal = () => {
    onClickToClose()
  }

  const handleCreateReceipt = () => {
    newReceiptJSON.value = currency
    console.log(newReceiptJSON)
    onClickToClose()
  }

  return (
    <OverlayContainer>
      <OverlayContent>
        <div>
          <h1>Insira o valor do novo recibo.</h1>
        </div>
        <label htmlFor="value">
          R$
          <NumericFormat
            id="value"
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale={true}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            displayType="input"
            placeholder="ex: 2.000,00"
          />
        </label>

        <div>
          <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
          <CreateReceiptButton type="button" onClick={handleCreateReceipt}>
            Criar Recibo
          </CreateReceiptButton>
        </div>
      </OverlayContent>
    </OverlayContainer>
  )
}
