import './App.css';
import {Table} from '../src/components/table'
import {Typography, Grid, Box} from "@material-ui/core";

function App() {
  return (
      <Grid container direction='column' justifyContent='center' alignItems='center'>
          <Box margin={4}>
      <Typography variant='h2' component='h2'>React Table Database</Typography>
          </Box>
     <Table/>
      </Grid>
  );
}

export default App;
