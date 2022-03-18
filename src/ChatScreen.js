import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Tayná',
            image: 'https://media.discordapp.net/attachments/721812428819660871/952801737947906058/144989319_484869206699280_3450865911234507390_n.png',
            message: 'Oii gatinho 🥰'
        },
        {
            name: 'Tayná',
            image: 'https://media.discordapp.net/attachments/721812428819660871/952801737947906058/144989319_484869206699280_3450865911234507390_n.png',
            message: 'Tudo bemm?'
        },
        {
            message: 'Oii Gatinhaa '
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>Deu match com você dia 17/03/20</p>
        {messages.map(message =>(
            message.name ? (
                <div className='chatScreen__message'>
                <Avatar
                    className='chatScreen__image'
                    alt={message.name}
                    src={message.image}
                    />
                <p className='chatScreen__text'>{message.message}</p>
            </div>
            ) : (
                <div className='chatScreen__message'>
                <p className='chatScreen__textUser'>{message.message}</p>
            </div>
            )
        ))}


                <form  className='chatScreen__input'>
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    type='text' 
                    placeholder='Digite alguma coisa'>
                        
                    </input>
                    <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>Enviar</button>
                </form>                


    </div>
  )
}

export default ChatScreen