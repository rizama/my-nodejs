import Laptop  from "./Laptop";

class Msi<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean){
        super("MSI", type, numeric, touchButton);
    }
}

export default Msi;