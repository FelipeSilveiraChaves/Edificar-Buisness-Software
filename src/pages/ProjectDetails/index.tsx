import { useState } from 'react'
import { ReceiptAndMaterialsHeader } from '../../components/ReceiptAndMaterialsHeader'
import { SelectableButton } from '../../components/SelectableButton'
import {
  ProjectDetailsConatainer,
  MainContainer,
  ButtonWrapper,
  TableWrapper,
  DownloadButton,
  DownloadButtonWrapper,
  DefaultsTableData,
  EmissionDate,
} from './styles'
import { BaseTable } from '../../components/BaseTable'
import { CalendarCheck, CreditCard, Cube } from '@phosphor-icons/react'
import { GoChecklist } from 'react-icons/go'
import { ReceiptModal } from '../../components/ReceiptModal'
import { MaterialsModal } from '../../components/MaterialModal'

export function ProjectDetails() {
  const [filter, setFilter] = useState('Recebidos')
  const [modal, setModal] = useState(false)

  function handleOpenModal() {
    setModal(!modal)
  }
  function handleCloseModal() {
    setModal(!modal)
  }

  return (
    <ProjectDetailsConatainer>
      {modal === true && filter === 'Recebidos' && (
        <ReceiptModal onClickToClose={handleCloseModal} />
      )}
      {modal === true && filter === 'Materiais' && (
        <MaterialsModal onClickToClose={handleCloseModal} />
      )}
      <ReceiptAndMaterialsHeader
        pageName="Ampliação Bierhals"
        onClickButton={handleOpenModal}
      />
      <MainContainer>
        <ButtonWrapper>
          <SelectableButton
            title="Recebidos"
            amount={3}
            selected={filter === 'Recebidos'}
            onClick={() => setFilter('Recebidos')}
          />
          <SelectableButton
            title="Materiais"
            selected={filter === 'Materiais'}
            amount={3}
            onClick={() => setFilter('Materiais')}
          />
        </ButtonWrapper>
        <TableWrapper>
          {filter === 'Recebidos' && (
            <BaseTable>
              <thead>
                <tr>
                  <th>Recibo Nº</th>
                  <EmissionDate>Data da Emissão</EmissionDate>
                  <th>Valor</th>
                  <th>Arquivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <CreditCard />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <p>R$</p>
                      <p>3.000.000,00</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
              </tbody>
            </BaseTable>
          )}
          {filter === 'Materiais' && (
            <BaseTable>
              <thead>
                <tr>
                  <th>Pedido Nº</th>
                  <EmissionDate>Data da Emissão</EmissionDate>
                  <th>Itens</th>
                  <th>Arquivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <Cube />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <GoChecklist />
                      <p>Areia, Brita, Madeira</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <Cube />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <GoChecklist />
                      <p>Areia, Brita, Madeira</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <Cube />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <GoChecklist />
                      <p>Areia, Brita, Madeira</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
                <tr>
                  <DefaultsTableData>
                    <div>
                      <Cube />
                      <p>1</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <CalendarCheck />
                      <p>2023/06/24 (8:30)</p>
                    </div>
                  </DefaultsTableData>
                  <DefaultsTableData>
                    <div>
                      <GoChecklist />
                      <p>Areia, Brita, Madeira</p>
                    </div>
                  </DefaultsTableData>
                  <DownloadButtonWrapper>
                    <div>
                      <DownloadButton type="button">Download</DownloadButton>
                    </div>
                  </DownloadButtonWrapper>
                </tr>
              </tbody>
            </BaseTable>
          )}
        </TableWrapper>
      </MainContainer>
    </ProjectDetailsConatainer>
  )
}
