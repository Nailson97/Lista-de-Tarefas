import * as C from '../ListItem/styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
    item: Item
}

export default function ListItem ({ item}: Props) {
    const [isChecket, setIsChecked] = useState(item.done)

    return(
        <C.Container done={isChecket}>
           <input type='checkbox' checked={isChecket} onChange={ e => setIsChecked(e.target.checked)}/>
           <label>{item.name}</label>
        </C.Container>
    )
}