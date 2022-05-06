import styled from 'styled-components'
import Head from 'next/head'
import Character from '../components/Character.js';
import { useState } from 'react/cjs/react.development';

export default function Characters({ characters }) {
  const [value, setValue] = useState(12)

  const handleShowMore = () => {
    setValue(value + 12)
  }

  return (
    <>
      <Head>
        <title>Star Wars</title>
      </Head>
      <HomeScreenContainer>
        <StarFieldLeft />
        <CharactersContainer>
          {characters
          .filter((character) => character.id !== 28 && character.id !==77 )
          .map(
            (character, index) => 
              index < value && (
                <Character character = {character} key = {character.id} />
              )
          )
          }
        </CharactersContainer>
        <StarFieldRight />
      </HomeScreenContainer>
    </>
  )
}

export async function getStaticProps(context) {
  const characters = await fetch("https://akabab.github.io/starwars-api/api/all.json")
  .then((res) => res.json())
  
  return {
    props: {
      characters,
    },
  }
}

const HomeScreenContainer = styled.div`

`
const StarFieldLeft = styled.div`

`
const CharactersContainer = styled.div`

`
const StarFieldRight = styled.div`

`
