import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "../../utils/const";
import { useAuth } from "contexts/AuthContext";


const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	const { currentUser } = useAuth();

	const authorizationStatus = useSelector(state => state.user.authorizationStatus);

	console.log(
		"authorizationStatus",
		authorizationStatus
	);
	console.log(
		"currentUser",
		currentUser
	);


	const isUserLoggedIn = authorizationStatus === AuthorizationStatus.AUTH && currentUser;


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

	if (isUserLoggedIn) {
		return (
			<Route
				{...rest}
				render={() => (
					<Redirect
						to={{
							pathname: "/",
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
