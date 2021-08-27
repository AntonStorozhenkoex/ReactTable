import { Table } from "../src/components/table";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Table />
    </Grid>
  );
}

export default App;
