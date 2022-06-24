import { gql, useMutation } from '@apollo/client';
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber(
    $name: String!
    $email: String!
  ) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subscribe = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [createSubscriber, { loading /*, data */ }] =
    useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">
              aplicação completa
            </strong>
            , do zero, com{' '}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática
            uma das tecnologias mais utilizadas e com alta
            demanda para acessar as melhores oportunidades
            do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="block mb-6 text-2xl ">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full gap-2">
            <input
              className="px-5 bg-gray-900 rounded h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="px-5 bg-gray-900 rounded h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="py-4 mt-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700 disabled:opacity-50">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/codemockup.png"
        className="mt-10"
        alt="code"
      />
    </div>
  );
};

export default Subscribe;
