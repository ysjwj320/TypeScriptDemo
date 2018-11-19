/* app/util/digest.util.ts */
import * as sha256 from "fast-sha256";
import {CodingUtil} from './coding.util';

export class DigestUtil {

    static sha256Hash(sourceValue: string) {
        const hasher = new sha256.Hash();
        let uint8Value = CodingUtil.encode(sourceValue);
        hasher.update(uint8Value);
        let uint8Result = hasher.digest();
        return CodingUtil.decode(uint8Result);
    }

}