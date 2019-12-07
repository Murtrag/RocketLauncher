import { connect } from "react-redux";
import Platform from "../components/Platform";
import {add, remove, launchRocket } from "../redux/actions";

 function mapStateToProps(state) {
         return {
                 rockets: state
         }
 }

const mapDispatchToProps = (dispatch)=>{
	return {
		addRocket: () => dispatch(add()),
		removeRocket: () => dispatch(remove())
		launchRocket: () => dispatch(launchRocket())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
