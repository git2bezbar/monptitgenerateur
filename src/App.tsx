import './main.css'
import {
  feminineBeginning,
  masculineBeginning,
  feminineNouns,
  masculineNouns
} from './data/names';
import { useState } from 'react';

function App() {

  const [nickname, setNickname] = useState<string>('');

  const generateNickname = () => {
    const isFeminine = Math.random() < .5;
    const beginning = isFeminine ? feminineBeginning : masculineBeginning;
    const nouns = isFeminine ? feminineNouns : masculineNouns;
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    setNickname(`${beginning}${randomNoun}`);
  }

  return (
    <div className="flex flex-col gap-8 items-center w-screen h-screen justify-center p-8">
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>monptitgénérateur</h1>
      <button
        className='bg-emerald-600 hover:bg-emerald-900 hover:outline-emerald-600 duration-300 text-white font-bold py-4 px-8 rounded-full'
        onClick={generateNickname}
      >
        Générer un surnom
      </button>
      <p>{ nickname }</p>
    </div>
  )
}

export default App
