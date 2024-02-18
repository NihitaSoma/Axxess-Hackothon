
function Header(){
    const headerStyle = {
        backgroundColor: '#f9f8f2',
        padding: '10px',
        display: 'flex',
        textAlign: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
      };
    
      const navStyle = {
        listStyleType: 'none',
        padding: '0',
        margin: '0 200px',
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the list vertically
        width: '100%',
        textAlign: 'center',
      };
    
    const linkStyle = {
        margin: '0 8px',
        textDecoration: 'none',
        color: '#808080',
      };

      const logoStyle = {
        fontSize: '1.3rem', // Adjust the font size as needed
        color: '#84a4b4', // Change the color to #84a4b4
        marginRight: '10px', // Add some margin to separate the logo from the navigation
      };
    
      return (
        <header style={headerStyle}>
          <h1 style={logoStyle}>DermaFind</h1>
          <nav>
            <ul style={navStyle}>
              <li><a href="#" style={linkStyle}>Home</a></li>
              <li><a href="#" style={linkStyle}>About</a></li>
              <li><a href="#" style={linkStyle}>Services</a></li>
            </ul>
          </nav>
        </header>
      );
    }

export default Header