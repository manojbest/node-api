import {inject as Inject} from "inversify";
import {TYPES} from "../constant/common-constant";
import {TestDaoImpl} from "../dao/test-dao-impl";
import {TestDetails} from "../dto/test-dto";
import User from "../models/user";
import {Service} from "../support/decorator/custom-decorator";
import {TestService} from "./test-service";

@Service(TYPES.TestService)
export class TestServiceImpl implements TestService {

    constructor(@Inject(TYPES.TestDao) private testDao: TestDaoImpl) {}

    public async getTestMethod() {
        // const value: string  = this.testDao.getEntity("test") + " : " + "This is from Test Service";
        //
        // const  testDto: TestDetails = new TestDetails();
        // testDto.key = value;
        // testDto.name  = "Test Key";
        //
        // return testDto;
        const user = await User.findOne({where: {email: "admin@lucky.com"}});
        console.log("user : ", user);
    }

}
