export const invoice = {
  id: 'XM9141',
  paymentDue: '2021-09-20T12:23:21.349752Z',
  description: 'Graphic Design',
  paymentTerms: 10,
  clientName: 'Alex Grim',
  clientEmail: 'alexgrim@mail.com',
  status: 'pending',
  senderAddress: {
    street: '19 Brooklyn',
    city: 'New York',
    postCode: 'E1 3EZ',
    country: 'USA',
  },
  clientAddress: {
    street: '19 Union Terrace',
    city: 'London ',
    postCode: 'E1 3EZ',
    country: 'United Kingdom',
  },
  items: [
    {
      name: 'Banner Design',
      quantity: 1,
      price: 156,
      total: 156,
    },
    {
      name: 'Email Design',
      quantity: 2,
      price: 200,
      total: 400,
    },
  ],
  total: 556,
  createdAt: '2022-06-21T11:36:09.714464Z',
  updatedAt: '2022-06-21T11:36:09.714464Z',
}
