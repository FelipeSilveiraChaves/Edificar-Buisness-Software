import { DefaultHeader } from '../../components/DefaultHeader'
import { ClientsContainer, ShortDatas, MainContainer } from './styles'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { LuHotel, LuSmartphone } from 'react-icons/lu'
import {
  EnvelopeSimple,
  Cube,
  FolderNotchOpen,
  CreditCard,
} from '@phosphor-icons/react'
import { BaseTable } from '../../components/BaseTable'
import { useNavigate } from 'react-router-dom'

export function Clients() {
  const navigate = useNavigate()

  function handleNavigate(id: number) {
    navigate(`/client/${id}`)
  }

  const fakeData = [
    {
      id: 56,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 54,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 53,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 15,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 55,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 5316,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 563,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 565,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 536,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 516,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
    {
      id: 5246,
      name: 'Rafael',
      empresa: 'Edificar LTDA',
      CNPJ: '05355588050',
      Tel: '05355588050',
    },
  ]

  return (
    <ClientsContainer>
      <DefaultHeader pageName="Clientes" />
      <MainContainer>
        <BaseTable>
          <thead>
            <tr className="headerTable">
              <th>Cliente</th>
              <th>Empresa</th>
              <th>CNPJ</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((client) => (
              <tr key={client.id} onClick={() => handleNavigate(client.id)}>
                <td>
                  <div>
                    <AiOutlineUser />
                    {client.name}
                  </div>
                </td>
                <td>
                  <div>
                    <LuHotel />
                    {client.empresa}
                  </div>
                </td>
                <td>
                  <div>
                    <AiOutlineLock />
                    {client.CNPJ}
                  </div>
                </td>
                <td>
                  <div>
                    <LuSmartphone />
                    {client.Tel}
                  </div>
                </td>
                <td className="shortDatas">
                  <ShortDatas>
                    <div>
                      <FolderNotchOpen />
                      99
                    </div>
                    <div>
                      <EnvelopeSimple />
                      99
                    </div>
                    <div>
                      <CreditCard />
                      99
                    </div>
                    <div>
                      <Cube />
                      99
                    </div>
                  </ShortDatas>
                </td>
              </tr>
            ))}
          </tbody>
        </BaseTable>
      </MainContainer>
    </ClientsContainer>
  )
}
