import React, { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import ListItem from './components/ListItem/index'


export default function App () {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o meu ps5', done: false},
    { id: 2, name: 'Comprar um Smart tv 4k ', done: false}
  ])

  return(
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          
          {list.map((item, index) => (
            <ListItem/>
          ))}
        </C.Area>
    </C.Container>
  )
}
