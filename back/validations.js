import { body, oneOf } from 'express-validator';

export const loginValidation = [
  oneOf([body('email').isEmail(), body('nickName').isLength({ min: 6 })], {
    message: 'False email or nickName',
  }),
  body('password', 'Пароль должен быть минимум 8 символов').isLength({ min: 8 }),
];

export const registerValidation = [
  body('nickName', 'Никнейм должен быть минимум 6 символов').isLength({ min: 4 }),
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 8 символов').isLength({ min: 8 }),
  body('fullName', 'Укажите имя от 3х символов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
  body('time', 'Неверный формат даты').optional().isDate(),
];

export const taskCreateValidation = [
  body('nameTask', 'Введите название задачи').isLength({ min: 3 }).isString(),
  body('dateTask', 'Введите дату').optional().isLength({ min: 5 }).isString(),
  body('checkedTask', 'true или false').optional().isBoolean(),
];

export const listCreateValidation = [
  body('nameList', 'Введите название списка').isLength({min: 3}).isString(),
]
