/* app/util/coding.util.ts */
import {TextEncoder, TextDecoder} from "text-encoding";

export class CodingUtil {
    static textEncoder : TextEncoder = new TextEncoder("utf-8");
    static textDecoder : TextDecoder = new TextDecoder("utf-8");

    static encode(input?: string, options?: TextEncodeOptions) {
        return CodingUtil.textEncoder.encode(input, options);
    }

    static decode(input?: Uint8Array, options?: TextDecoderOptions) {
        return CodingUtil.textDecoder.decode(input, options);
    }
    
}