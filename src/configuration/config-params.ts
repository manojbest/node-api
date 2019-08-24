
import * as config from "config";

export class ConfigParams {

    /**
     * Return the comma separated portrait products
     * @returns {string}
     */
    public static getPortraitAvatarProducts(): string[] {
        const param: string = config.get("product.avatar.portrait");
        return param.split(",");
    }


    /**
     * Return the comma separated products which don't have trade marks.
     * @returns {string}
     */
    public static getNoTradeMarkProducts(): string[] {
        const param: string = config.get("product.noTradeMark");
        return param.split(",");
    }

    /**
     * Get the list of eureka urls.
     * @returns {string[]}
     */
    public static getEurekaClientServiceUrls(): string[] {
        const urls: string = config.get("eureka.client.serviceUrls");
        return urls ? urls.split(",") : [];
    }

}
