import {inject as Inject} from "inversify";
import {TYPES} from "../constant/common-constant";
import {TestDaoImpl} from "../dao/test-dao-impl";
import User from "../models/user";
import {Service} from "../support/decorator/custom-decorator";
import {TestService} from "./test-service";

@Service(TYPES.TestService)
export class TestServiceImpl implements TestService {

    constructor(@Inject(TYPES.TestDao) private testDao: TestDaoImpl) {
    }

    public async getTestMethod() {
        return await User.findOne({where: {email: "admin@lucky.com"}});
    }

}
