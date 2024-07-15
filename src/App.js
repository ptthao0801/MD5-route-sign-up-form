import React, { useState } from 'react';
import './App.css';

function App() {
    const [form, setForm] = useState({});
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault(); // chặn form gửi đi khi người dùng nhấn nút submit. Điều này cho phép bạn kiểm tra các giá trị trong form và hiển thị thông báo phù hợp mà không cần làm mới trang.
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        const passwordsMatch = form.password === form.confirmPassword;
        if (isValid && passwordsMatch) {
            alert('Signed in successfully!');
        } else if (!passwordsMatch) {
            alert('Passwords do not match!');
        } else {
            alert('Please fill out all the fields!');
        }
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div className='custom-input'>
                    <label>Username</label>
                    <input name='username' value={form.username || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Email </label>
                    <input name="email" value={form.email || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Password </label>
                    <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Confirm password </label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
  
}

export default App;
