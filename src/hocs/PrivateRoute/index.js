import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AuthorizationStatus } from "../../utils/const";
import { useAuth } from "contexts/AuthContext";


const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	const { currentUser } = useAuth();
	// const authorizationStatus = useSelector(state => state.auth.authorizationStatus);

	console.log(
		"currentUser",
		currentUser
	);

	const isUserLoggedIn = currentUser;

	console.log(
		`isUserLoggedIn`,
		isUserLoggedIn
	);

	if (!isUserLoggedIn) {
		return (
			<Route
				{...rest}
				render={() => (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)}
			/>
		);
	}


	return (
		<Route
			{...rest}
			render={(props) => (
				<Component {...props} />
			)}
		/>
	);
};

export default PrivateRoute;
