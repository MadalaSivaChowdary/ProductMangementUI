import {legacy_createStore} from "redux";
import reducer from "./reducer.js"

const Store = legacy_createStore(reducer)

export default Store;