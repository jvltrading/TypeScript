//Modules--------------------------------------------->
//Exports && Imports

// export const numberRegxp = /^[0-9]+$/;

// export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegxp.test(s);
//     }
// }

//The Above Example can be written as..
// import {StringValidator} from "./Validation";

// const numberRegxp = /^[0-9]+$/;

// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegxp.test(s);
//     }
// }

// export {ZipCodeValidator};
// export {ZipCodeValidator as mainValidator};

import { StringValidator } from "./Validation";

const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}