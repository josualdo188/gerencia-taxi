// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const USERS = [
    { email: "josualdo@taxi.com", senha: "admin" },
  ];

const user = USERS.find(
  (user) => user.email === req.body.email && user.senha === req.body.password
);

if (user) {
  return res.status(200).json(user);
}

res.status(400).json({error: "Usuário não encontrado"});
// como alterar a aparência dessa mensagem //

}