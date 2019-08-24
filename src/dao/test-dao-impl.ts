import {TestDao} from "./test-dao";
import {Repository} from "../support/decorator/custom-decorator";
import {TYPES} from "../constant/common-constant";

@Repository(TYPES.TestDao)
export class TestDaoImpl implements TestDao {

    getEntity(name: string) {
        return "This is from DAO Layer"
    }

}