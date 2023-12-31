import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../components/layouts/Layout';
import { EntryList, EntryNew } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - KanbaBoard'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            <CardContent >
              {/* {Agregar una nueva entrada} */}
              <EntryNew />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Proceso' />
            <CardContent>
              {/* {Agregar una nueva entrada} */}
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent>
              {/* {Agregar una nueva entrada} */}
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
