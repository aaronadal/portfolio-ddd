import { SkillName } from '../../../../src/Cv/Domain/Skill/SkillName';
import { WordMother } from '../../../Shared/domain/WordMother';
import { EmptyStringError } from '../../../../src/Shared/Domain/ValueObject/EmptyStringError';

describe('SkillName domain constraints', () => {
    it('passes if value is defined', () => {
        new SkillName(WordMother.random());
    });

    it('fails if value is empty', () => {
        expect(() => {
            new SkillName('');
        }).toThrow(EmptyStringError);
    });
});
