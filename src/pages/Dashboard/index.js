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
import PageLayout from "layouts/PageLayout";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { database } from "firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { useIntl } from "react-intl";
import { useAuth } from "contexts/AuthContext";


const useStyles = makeStyles((theme) => ({
	tableBody: {
		display: "block",
		overflow: "auto",
		maxHeight: "70vh",
		"&.MuiTableBody-root": {
			display: "block",
		}
	},
	tableHead: {

		fontWeight: "bold",

		".MuiTableCell-root": {
			color: theme.palette.primary.main,
		}
	},
	tableRow: {
		"&.MuiTableRow-root": {
			display: "flex",
			justifyContent: "space-between"
		}
	},
	productTable: {
		color: theme.palette.primary.main,
		"& .MuiTableCell-root": {
			color: theme.palette.primary.main,
			width: "100%",
		},

	},
	tableImg: {
		maxWidth: "250px",
		height: "auto",
		maxHeight: "250px",
		overflow: "hidden",
	},
	productTitle: {
		textTransform: "uppercase"
	}
}));

const Dashboard = () => {
	const intl = useIntl();
	const classes = useStyles();
	const [products, setProducts] = useState(null);
	const { currentUserId } = useAuth();
	


	useEffect(
		() => {
			const fetchProducts = async () => {
				const productsRef = ref(
					database,
					`users/${currentUserId}/products/`
				);

				await onValue(
					productsRef,
					(snapshot) => {
						const data = snapshot.val();
						setProducts(data);
					}
				);
			};
			fetchProducts();
		},
		[]
	);
	

	return (
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				height="100vh"
				justifyContent="center"
			>
				<Container maxWidth="lg" >
					<Typography
						variant="h2"
						mb="30px"
					>{intl.formatMessage({ id: "productList" })}
					</Typography>
					<TableContainer >
						<Table
							aria-label="product table"
							className={classes.productTable}
						>
							<TableHead className={classes.tableHead}>
								<TableRow className={classes.tableRow}>
									<TableCell align="left">{intl.formatMessage({ id: "productId" })}</TableCell>
									<TableCell align="left">{intl.formatMessage({ id: "title" })}</TableCell>
									<TableCell align="left">{intl.formatMessage({ id: "picture" })}</TableCell>
									<TableCell align="left">{intl.formatMessage({ id: "quantity" })}</TableCell>
								</TableRow>
							</TableHead>
							<TableBody className={classes.tableBody}>
								{products && Object.values(products).map((product) => {
									return (
										<TableRow
											key={product.id}
											className={classes.tableRow}
										>
											<TableCell align="left">{product.id}</TableCell>
											<TableCell
												align="left"
												className={classes.productTitle}
											>{product.title}
											</TableCell>
											<TableCell align="left">
												{product.product_picture && <img
													src={product.product_picture}
													alt={product.title}
													className={classes.tableImg}
												/>}
											</TableCell>
											<TableCell align="left">{product.quantity}</TableCell>
										</TableRow>
									);
								})}

							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default Dashboard;
