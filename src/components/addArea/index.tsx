import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export default function AddArea ({ onEnter}: Props) {
    const [inputText, setInputtext] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputtext('')
        }
    }

    return(
        <C.Container>
            <div className='image'>✚</div>
            <input type='text' placeholder='Adicione uma tarefa'
            value={inputText} onChange={e => setInputtext(e.target.value)}
            onKeyUp={handleKeyUp}></input>
        </C.Container>
    )
}