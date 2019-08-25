import {TYPES} from "../constant/common-constant";
import {Repository} from "../support/decorator/custom-decorator";
import {TestDao} from "./test-dao";

@Repository(TYPES.TestDao)
export class TestDaoImpl implements TestDao {

    public getEntity(name: string) {
        return "This is from DAO Layer";
    }

}
