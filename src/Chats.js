import React from 'react'
import './Chats.css';
import Chat from './Chat';


function Chats() {
  return (
    <div className='chats'>
        <Chat
         name="Tayná"
         message="Oii gatinho 🥰"
         timestamp="40 segundos atrás"
         profilePic="https://media.discordapp.net/attachments/721812428819660871/952801737947906058/144989319_484869206699280_3450865911234507390_n.png"
         />
         <Chat
         name="Marina"
         message="Oii coisa feia"
         timestamp="3 minutos atrás"
         profilePic="https://media.discordapp.net/attachments/721812428819660871/952813117597941841/212989970_154399773333667_6336776110444100642_n.png"
         />
         <Chat
         name="Jenifer"
         message="Oie lindão 💕"
         timestamp=" 5 horas atrás"
         profilePic="https://media.discordapp.net/attachments/721812428819660871/952812892904910898/244472870_667986604298531_6515318383652076168_n.png"
         />
         <Chat
         name="Clarissa"
         message="Oii lindoo "
         timestamp="1 dia  atrás"
         profilePic="https://media.discordapp.net/attachments/721812428819660871/952813739470626846/244151572_164569759256041_7574742490158563147_n.png"
         />
    </div>
  )
}

export default Chats