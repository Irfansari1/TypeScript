import {render} from "react-dom";
import App from "./App";

//root idsine ait bir root u bulup uygulamanin oraya import edilmesi
const root = document.querySelector("#root")


//App i render edip dom daki root a yazdirma
render(<App />, root)
