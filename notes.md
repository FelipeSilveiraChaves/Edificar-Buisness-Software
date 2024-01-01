- [**DICKS CSS**](#dicks-css)
  - [quebrar conteudo quando tela pequena](#quebrar-conteudo-quando-tela-pequena)
  - [herdando valores do pai](#herdando-valores-do-pai)
  - [border-collapse: collapse;](#border-collapse-collapse)
- [Entendo o Outlet](#entendo-o-outlet)
- [Rotas](#rotas)
  - [OBS sobre NavLink](#obs-sobre-navlink)
- [Entendendo variáveis do TypeScript](#entendendo-variáveis-do-typescript)
- [Controlled forms / Uncontrolled forms](#controlled-forms--uncontrolled-forms)
  - [Prós e Contras](#prós-e-contras)
  - [*react-hook-form*](#react-hook-form)


# **DICKS CSS**

## quebrar conteudo quando tela pequena

utilizando o flex-wrap: wrap, quando a tela for pequena ele quebra o conteudo em vez de ficar empurrando para os lados


## herdando valores do pai

```css
.teste{
  font-size: inherit;
}
```
esse inherit faz com que se o pai do .teste tiver um font-size de 4rem, o .teste tenha também

## border-collapse: collapse;

border-collapse: collapse é usado somente em tabelas HTML, e serve para que quando colocar border em alguma coluna elas se fundirem, em vez de cada uma contabilizar pixels
ex
borda de 1px as bordas laterais delas vão virar 2px









# Entendo o Outlet

outlet é um componente do react router DOM, que serve unica e exclusivamente para fornecer um espaço em uma pagina, pois ele é usado para quando
é criado layouts para paginas, que são partes de paginas que se repetem com muita frequencia, aí tu cria padrões para elas, assim nao precisando renderizar
sempre a mesma coisa



arquivo de setar o layout
```tsx
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


---------------------
Router arquivo vai passar em vouta o arquivo do layout como renderização do elemento.
assim a home e a history vão ter o mesmo padrão.

import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

```

# Rotas

Sobre rotas vai ser usado o react router DOM, que tem varios componentes como foi mostrado ja acima, mas uma parte importante é o [NavLink], que ele é como se fosse o A do 
htlm, porem feito para o react router DOM, e em vez de href se usa o [to] para navegar

```tsx
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoignite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
```
## OBS sobre NavLink

o nav link ele faz com que sempre o navLink que foi clicado tenha uma class active. assim é possivel estilizar ela se necessario


# Entendendo variáveis do TypeScript

```ts
const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
```
a [interface], cria propriedades para meu componente Status, 
que a tipagem dele é o objeto [STATUS_COLOR] que contem as 3 keys representantes
o **as const** ali serve para o type script, entender que as keys do objeto não podem mudar e serão sempre essas, para que dessa maneira ele consiga revisar e comparar com o props.theme

props.theme[STATUS_COLOR[props.statusColor]], 
busca no STATUS_COLOR como argumento o que foi passado na propriedade, e o valor é buscado nos valores globais de theme

# Controlled forms / Uncontrolled forms

  Controlled basicamente tu extrai a informação em tempo real, usando aquela estrategia basica de onChange={code...}, garantindo que todo caractere que mudar no input refletirá no estado, e o Uncontrolled a extração dos dados vai basicamente acontecer somente no submit do form para que tenha mais performace

## Prós e Contras

[Controlled] é possivel criar ações que variam de acordo com o estado do form, como desabilitar um botão se um input X não esteja preenchido([refletir_visualmente_de_acordo_com_o_valor_dos_inputs]), 
porém em forms MUITO grandes, devido a atualização via onChange, re-renderiza os **componentes por completos.**, assim podendo ser não performatico

[Uncontrolled] o uncontrolled é possivel criar forms mais massivos, que tenham muitos e muitos inputs, mas assim abrindo mão das possibilidades vizuais do controlled



exemplo de **controlled**
```tsx 
export function Home() {
  const [task, setTask] = useState('')

  return (
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          )
}
```



*em sua maioria o controlled irá servir e nao sera visto gargalos*


## *react-hook-form*

extramamente bom para captar dados e lidar com forms, uma aula do ignite só fala sobre isso. em resumo:

```tsx
const { register, handleSubmit, watch } = useForm() //importa as funções que vai utilizar por aqui, (as do useForm, obviamente)

o **register** tem muitas coisas nele, como onChange, onBlur... ele carrega muitas propriedades com ele, 
tu passa como propriedade de um input dessa forma: {...register('NameDoIput')}



o **handleSubmit** tu usa assim:
<form onSubmit={handleSubmit(handleCreateNewCycle)} />

sendo a handleCreateNewCycle como a nossa criação, e essa função recebe como parametro o [data] que os datos captados pelo o useForm.



o **watch** é basicamente assitir um input em tempo real, é basicamente usado pro controlled Form

const task = watch('task')

<input disabled={!task}><input/>
```
