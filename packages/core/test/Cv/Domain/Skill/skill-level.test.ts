import { SkillLevelOutOfRangeError } from '../../../../src/Cv/Domain/Skill/SkillLevelOutOfRangeError';
import { SkillLevel } from '../../../../src/Cv/Domain/Skill/SkillLevel';
import { SkillLevelMother } from './SkillLevelMother';

describe('SkillLevel domain constraints', () => {
    it('passes if value is between 0 and 100', () => {
        const level = SkillLevelMother.random();
        expect(level.value).toBeGreaterThanOrEqual(0);
        expect(level.value).toBeLessThanOrEqual(100);

        // Force to be 0 and 100 to check off by one cases.
        new SkillLevel(0);
        new SkillLevel(100);
    });

    it('fails if value is more than 100', () => {
        expect(() => {
            new SkillLevel(101);
        }).toThrow(SkillLevelOutOfRangeError);
    });

    it('fails if value is less than 0', () => {
        expect(() => {
            new SkillLevel(-1);
        }).toThrow(SkillLevelOutOfRangeError);
    });
});
