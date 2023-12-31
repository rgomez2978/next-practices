import { Container, Image, Text } from "@nextui-org/react"



export const NoFavorites = ({ }) => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh-100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>

      <Text h1>No hay Pokemons</Text>
      <Image
        src="/img/image-placeholder.svg"
        alt="No existen favoritos"
        width={250}
        height={250}
        css={{
          opacity: 0.1
        }}
      />
    </Container>
  )
}

