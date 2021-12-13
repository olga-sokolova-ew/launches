import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "../../utils/const";
import { useAuth } from "contexts/AuthContext";
import Loader from "components/common/Loader/Loader";


const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	const { currentUser } = useAuth();
	const authorizationStatus = useSelector(state => state.auth.authorizationStatus);

	const isUserLoggedOut = authorizationStatus === AuthorizationStatus.NO_AUTH && currentUser;

	console.log(
		"currentUser",
		currentUser
	);

	/*console.log(
		`isUserLoggedIn`,
		isUserLoggedIn
	);*/

	
	if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
		return <Loader />;
	}

	if (isUserLoggedOut) {
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
