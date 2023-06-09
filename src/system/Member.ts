import { MemberFieldWithValue } from "./MemberField";
import { Visibility } from "./Visibility";

export class Member {
    constructor(
        public id: string,
        public name: string,
        public pronouns: string|null,
        public visibility: Visibility,
        public lastModified: Date,
        public color: string|null,
        public description: string|null,
        public fields: MemberFieldWithValue[],
    ) {}
}