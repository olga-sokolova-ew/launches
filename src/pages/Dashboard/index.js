import {
	Box,
	Container,
} from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageLayout from "layouts/PageLayout";
import { Typography } from "@mui/material";


const Dashboard = () => {



	return (
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				height="100vh"
				justifyContent="center"
			>
				<Container maxWidth="sm" >
					<Typography
						variant="h2"
						mb="30px"
					>Product List
     </Typography>
					<TableContainer component={Paper}>
						<Table
							aria-label="product table"
						>
							<TableHead>
								<TableRow>
									<TableCell align="left">Product id</TableCell>
									<TableCell align="left">Title</TableCell>
									<TableCell align="left">Picture</TableCell>
									<TableCell align="left">Quantity, pcs</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
							</TableBody>
						</Table>
					</TableContainer>


				</Container>
			</Box>
		</PageLayout>
	);
};

export default Dashboard;
