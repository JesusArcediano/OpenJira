import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import { Box, Card, CardHeader, Grid } from '@mui/material';
import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Layout title='Home - OpenJira'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NewEntry />
          </Grid>
          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh-100px)' }}>
              <CardHeader title="Pendientes" />
                <EntryList status='pending' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh-100px)' }}>
              <CardHeader title="En progreso" />
                  <EntryList status='in-progress' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh-100px)' }}>
              <CardHeader title="Completadas" />
                <EntryList status='finished' />
            </Card>
          </Grid>
        </Grid>
    </Layout>
  )
}
