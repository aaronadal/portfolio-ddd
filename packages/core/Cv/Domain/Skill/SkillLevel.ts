import {IntValueObject} from "../../../Shared/Domain/ValueObject/IntValueObject";
import {SkillLevelOutOfRangeError} from "./SkillLevelOutOfRangeError";

export class SkillLevel extends IntValueObject
{
    static readonly MIN: number = 0;
    static readonly MAX: number = 100;

    constructor(value: number) {
        super(value);
        this.ensureNumberBetweenLimits(value);
    }

    private ensureNumberBetweenLimits(value: number) {
        if(value < SkillLevel.MIN || value > SkillLevel.MAX) {
            throw new SkillLevelOutOfRangeError(`Level must be between ${SkillLevel.MIN} and ${SkillLevel.MAX}: ${value} provided`);
        }
    }
}
