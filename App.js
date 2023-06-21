import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kullanıcı adı ve şifreyi kontrol etmek için bir fonksiyon yazın
    // Eğer doğruysa, ana sayfaya yönlendirin
    navigate('/home');
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
