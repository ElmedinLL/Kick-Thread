
import { useParams } from "react-router-dom";
import {
  Button,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useFetchProductsDetailsQuery } from "./catalogApi";

export default function ProductDeatil() {
  const { id } = useParams();

  const {data : product , isLoading} = useFetchProductsDetailsQuery(id ? +id : 0);

  if (!product || isLoading) return <div>Loading...</div>;

  const ProductDeatils = [
    { label: "Name", value: product.name },
    { label: "Description", value: product.description },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity In Stock", value: product.quantityInStock },
  ];

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid2 size={6}>
        <img
          src={product?.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="orange">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table
            sx={{
              "&td": {
                fontSize: "1rem",
              },
            }}>
            <TableBody>
              {ProductDeatils.map((product, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {product.label}
                  </TableCell>
                  <TableCell>{product.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid2 container spacing={2} mt={3}>
          <Grid2 size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in basket"
              defaultValue={1}
              fullWidth
            />
          </Grid2>
          <Grid2 size={6}>
            <Button
              sx={{ height: 55 }}
              color="primary"
              variant="contained"
              fullWidth
              size="large">
              Add to Basket
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
