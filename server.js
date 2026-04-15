const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

// НАСТРОЙТЕ ПОДКЛЮЧЕНИЕ К ВАШЕЙ БАЗЕ ДАННЫХ
const db = mysql.createConnection({
  host: 'localhost',           // адрес сервера БД
  user: 'root',      // ваш логин для доступа к БД
  password: 'N55574668n',  // ваш пароль для доступа к БД
  database: 'app'    // название вашей базы данных
});

// Проверяем подключение
db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к БД:', err);
    return;
  }
  console.log('Успешно подключились к MySQL');
});

// Обработчик для регистрации
app.post('/api/register', async (req, res) => {
  const { login, password } = req.body;

  // Валидация: проверяем, что поля заполнены
  if (!login || !password) {
    return res.status(400).json({
      error: 'Логин и пароль обязательны для заполнения'
    });
  }

  try {
    // Проверяем, не существует ли уже такой логин
    const [existing] = await db.execute(
      'SELECT login FROM users WHERE login = ?',
      [login]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        error: 'Пользователь с таким логином уже существует'
      });
    }

    // Хэшируем пароль перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохраняем в базу данных
    const [result] = await db.execute(
      'INSERT INTO users (login, password) VALUES (?, ?)',
      [login, hashedPassword]
    );

    res.status(201).json({
      success: true,
      message: 'Пользователь успешно зарегистрирован'
    });
  } catch (error) {
    console.error('Ошибка при работе с БД:', error);
    res.status(500).json({
      error: 'Внутренняя ошибка сервера'
    });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
  console.log('Фронтенд доступен: http://localhost:3000');
});
