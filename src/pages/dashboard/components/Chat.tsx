import { useState } from 'react';

export const Chat = () => {
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(true);

  const toggleChatIsOpem = () => {
    setChatIsOpen(!chatIsOpen);
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div className={`container-photo-chat`} onClick={toggleChatIsOpem}>
        <img className="photo-chat" src="/chat.svg" alt="" />
      </div>

      <div className={`chat ${chatIsOpen ? 'open-chat' : 'to-ocult'}`}>
        <header className="chat-header">
          <div className="container-header" style={{ position: 'fixed' }}>
            <img
              className="logo-chat-header"
              src="https://img.freepik.com/fotos-premium/feliz-empresaria-adulta-bem-sucedida-em-roupa-formal-e-oculos-elegantes-sorrindo-e-olhando-em-pe-com-os-bracos-cruzados_251859-2390.jpg"
              alt=""
            />
            &nbsp;<h4 style={{ marginTop: '-10px' }}>Contato</h4>
            <div className="online-chat " style={{ marginTop: '0px' }}>
              <img height="8" src="/online.svg" alt="" />
              &nbsp;<span style={{ fontSize: '12px' }}>Online</span>
            </div>
          </div>
        </header>
        <div style={{ zIndex: 2 }} className="body-messages">
          <div className="message-secretary">
            <p className="text">Como posso te ajudar?</p>
          </div>
        </div>

        <input
          style={{
            position: 'absolute',
            bottom: '0',
            width: '96%',
            margin: '16px 8px ',
            alignSelf: 'center',
          }}
          className="input-dash"
          placeholder="Escreva aqui..."
          type="text"
        />
      </div>
    </div>
  );
};
