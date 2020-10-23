export type user = {
  name: string,
  id: number,
  dateOfBirth: string
}

export type transaction = {
  value: number,
  date: "string",
  description: string
}

export type account = {
  user: user,
  balance: number,
  statement: transaction[]
}

export const accounts: account[] = [
  {
    "user": {
      "name": "Juca",
      "id": 12345678900,
      "dateOfBirth": "15/03/1955"
    },
    "balance": 0,
    "statement": []
  },
  {
    "user": {
      "name": "Miriam",
      "id": 23456789011,
      "dateOfBirth": "11/12/1957"
    },
    "balance": 0,
    "statement": []
  },
  {
    "user": {
      "name": "Roberto",
      "id": 34567890122,
      "dateOfBirth": "29/01/1986"
    },
    "balance": 0,
    "statement": []
  },
  {
    "user": {
      "name": "Gabriela",
      "id": 45678901233,
      "dateOfBirth": "10/06/1984"
    },
    "balance": 0,
    "statement": []
  },
  {
    "user": {
      "name": "Olivia",
      "id": 56789012344,
      "dateOfBirth": "13/10/1999"
    },
    "balance": 0,
    "statement": []
  },
  {
    "user": {
      "name": "Sukita",
      "id": 67890123455,
      "dateOfBirth": "22/08/1998"
    },
    "balance": 0,
    "statement": []
  },
]