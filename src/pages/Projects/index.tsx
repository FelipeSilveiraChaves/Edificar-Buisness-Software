import { useNavigate } from 'react-router-dom'
import { BaseTable } from '../../components/BaseTable'
import { DefaultHeader } from '../../components/DefaultHeader'
import {
  ProjectsContainer,
  MainContainer,
  RecievedData,
  PendingData,
  MonetaryDataFather,
  TableFathers,
  AboutClient,
  AboutClientButton,
  OverlayContainer,
  OverlayContent,
} from './style'
import { CreditCard, FolderNotchOpen, MapPin, X } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'

const fakeData = [
  {
    id: 3,
    title: 'Ampliação BierHals 1',
    Endereço: 'Rua Dezenove, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 2,
    title: 'Ampliação BierHals 1',
    Endereço: 'Rua Dezenove, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 21,
    title: 'Felipe Chaves',
    Endereço: 'Rua Dezenove, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 26,
    title: 'Concerto Telhado Dona Bianca',
    Endereço: 'Rua Ney Amado Costa, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 233,
    title: 'Adair Banheiro',
    Endereço: 'Rua Cristovão Colombo, 570',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 223,
    title: 'Ampliação BierHals 1',
    Endereço: 'Rua Dezenove, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 243,
    title: 'Ampliação BierHals 1',
    Endereço: 'Rua Dezenove, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.965.44 (76%)',
  },
  {
    id: 234,
    title: 'Guanabara',
    Endereço: 'Avenida Brasil',
    pending: '523.434 (100%)',
    recieved: '(0%)',
  },
  {
    id: 24,
    title: 'Ampliação BierHals 1',
    Endereço: 'Rua, 839',
    pending: '555.965.44 (76%)',
    recieved: '555.44 (76%)',
  },
]
const fakeDescriptions = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate nihil maiores nemo numquam, exercitationem quaerat amet perferendis, aut reprehenderit voluptatem neque eos beatae? Fugiat necessitatibus sed totam nobis nemo atque nihil minus est?',
}

export function Projects() {
  const navigate = useNavigate()
  const fakeDescritionValue = fakeDescriptions.description

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [modal, setModal] = useState(false)
  const [description, setDescription] = useState<string>(fakeDescritionValue)
  const [changedDescription, setChangedDescription] = useState(description)

  function handleDescriptionChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement

    setChangedDescription(target.value)
  }

  const handleToggleModal = () => {
    setModal(!modal)
  }
  const handleSaveNewDescriptions = () => {
    if (changedDescription.trim() === '') {
      alert('O campo não pode estar vazio!')
      return
    }
    setDescription(changedDescription)
    handleToggleModal()
  }
  const handleCloseModal = () => {
    setModal(!modal)
    setChangedDescription(fakeDescritionValue)
  }
  function handleNavigate(id: number) {
    navigate(`/projects/${id}`)
  }

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }, [changedDescription])
  return (
    <ProjectsContainer>
      {modal === true && (
        <OverlayContainer>
          <OverlayContent>
            <div>
              <h2>Editar dados de Daniel Olivera</h2>
              <button onClick={handleCloseModal}>
                <X />
              </button>
            </div>
            <div>
              <h3>Resumo</h3>
              <textarea
                value={changedDescription}
                placeholder="Preencha com informações sobre o cliente..."
                onChange={handleDescriptionChange}
                rows={1}
                ref={textAreaRef}
              ></textarea>
            </div>
            <div>
              <button onClick={handleCloseModal}>Cancelar</button>
              <button onClick={handleSaveNewDescriptions}>Concluído</button>
            </div>
          </OverlayContent>
        </OverlayContainer>
      )}
      <DefaultHeader pageName="Projetos" />
      <AboutClient>
        <h3>Dados do Cliente</h3>
        <AboutClientButton type="button" onClick={handleToggleModal}>
          Editar{' '}
        </AboutClientButton>
        <p>{description}</p>
      </AboutClient>
      <MainContainer>
        <BaseTable>
          <thead>
            <tr>
              <TableFathers>Título</TableFathers>
              <TableFathers>Endereço</TableFathers>
              <MonetaryDataFather>Pendente</MonetaryDataFather>
              <MonetaryDataFather>Recebido</MonetaryDataFather>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((project) => (
              <tr key={project.id} onClick={() => handleNavigate(project.id)}>
                <td>
                  <div>
                    <FolderNotchOpen />
                    {project.title}
                  </div>
                </td>
                <td>
                  <div>
                    <MapPin />
                    {project.Endereço}
                  </div>
                </td>
                <td>
                  <PendingData>
                    <CreditCard />
                    {project.pending}
                  </PendingData>
                </td>
                <td>
                  <RecievedData>
                    <CreditCard />
                    {project.recieved}
                  </RecievedData>
                </td>
              </tr>
            ))}
          </tbody>
        </BaseTable>
      </MainContainer>
    </ProjectsContainer>
  )
}
