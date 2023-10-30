import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { pokeApi } from "../../api";
import { PokemonDetail } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="xxx">

      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text transform="capitalize" h1>{pokemon.name}</Text>
              <Button color='gradient' ghost>
                Guardar a favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}> Sprites: </Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


// Se ejecuta del lado del server cundo se hace el build para crear o registrar las paginas o rutas de cada item
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // Se crea un areglo de 151 posiciones
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  // Consulta la API del item o id seleccionado
  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage;