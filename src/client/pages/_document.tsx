import Document from "next/document";
import { withMaterialUIDocument } from "../display";

class MyDocument extends Document {}

export default withMaterialUIDocument(MyDocument);
