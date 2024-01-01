import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  OverlayContainer,
  OverlayContent,
  CreateReceiptButton,
  CancelButton,
  LabelContainer,
  AddMaterialButton,
  RemoveMaterialButton,
  NameMaterialInput,
  AmountInput,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, X } from '@phosphor-icons/react'

interface MaterialModalProps {
  onClickToClose: () => void
}

const newMaterialListValidationSchema = z.object({
  materials: z.array(
    z.object({
      name: z.string(),
      amount: z
        .string()
        .min(1, 'Valor precisa ser maior que 0')
        .max(99, 'Valor precisa ser menor que 100'),
    }),
  ),
})

type newMaterialListData = Zod.infer<typeof newMaterialListValidationSchema>

export function MaterialsModal({ onClickToClose }: MaterialModalProps) {
  const emptyMaterialList = {
    name: '',
    amount: '',
  }
  const { register, handleSubmit, control } = useForm<newMaterialListData>({
    resolver: zodResolver(newMaterialListValidationSchema),
    defaultValues: {
      materials: [emptyMaterialList],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'materials',
  })

  const handleCloseModal = () => {
    onClickToClose()
  }

  function handleSubmitNewMaterialList(data: newMaterialListData) {
    console.log(data)
  }

  return (
    <OverlayContainer>
      <OverlayContent>
        <div>
          <h1>Insira a lista de materiais.</h1>
        </div>

        <form onSubmit={handleSubmit(handleSubmitNewMaterialList)}>
          <div>
            <p>Nome</p>
            <p>un</p>
          </div>

          {fields.map((field, index) => {
            return (
              <LabelContainer key={field.id}>
                <label htmlFor="">
                  <NameMaterialInput
                    type="text"
                    placeholder="Nome do Material"
                    {...register(`materials.${index}.name` as const)}
                  />
                </label>
                <label htmlFor="">
                  <AmountInput
                    type="number"
                    placeholder="qnt º"
                    {...register(`materials.${index}.amount` as const)}
                  />
                </label>
                {index > 0 && (
                  <div>
                    <RemoveMaterialButton
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <X weight="bold" />
                    </RemoveMaterialButton>
                  </div>
                )}
              </LabelContainer>
            )
          })}
          <div>
            <AddMaterialButton
              type="button"
              onClick={() => append({ name: '', amount: '' })}
            >
              <Plus weight="bold" />
            </AddMaterialButton>
          </div>
          <div>
            <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
            <CreateReceiptButton type="submit">
              Enviar Lista de Materiais
            </CreateReceiptButton>
          </div>
        </form>
      </OverlayContent>
    </OverlayContainer>
  )
}
