const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#21582d', 
      padding: '20px 40px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'center', // Центрируем название
      alignItems: 'center',
      position: 'sticky', // Шапка будет "прилипать" при скролле
      top: 0,
      zIndex: 1000
    }}>
      <h1 style={{ 
        margin: 0, 
        fontFamily: '"Georgia", serif', 
        fontSize: '36px', 
        color: '#e67e22', // Оранжевый, как ваши кнопки
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        Макарония
      </h1>
    </header>
  );
};

export default Header; // <--- ДОБАВЬТЕ ЭТУ СТРОКУ
