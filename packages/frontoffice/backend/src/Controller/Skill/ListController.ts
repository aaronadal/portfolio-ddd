import {Controller} from "../Controller";
import {Request, Response} from "express";
import {SkillRepository} from "@portfolio-ddd/core/src/Cv/Domain/Skill/SkillRepository";
import {Criteria} from "@portfolio-ddd/core/src/Shared/Domain/Criteria/Criteria";

export class ListController implements Controller {
    constructor(
        private readonly repo: SkillRepository
    ) {
    }
    async run(_r: Request, _q: Response): Promise<void> {
        const skills = this.repo.matching(new Criteria());

        console.log(skills);

        _q.send('done');
    }
}
