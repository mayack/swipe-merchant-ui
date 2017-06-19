import { ClientApiBase } from "./client-api-base";
import { SupportRequestDto } from "../contracts/support-dto";
import { SearchRequestQueryData, SearchResponseDto } from "../contracts/search-dto";

export class SwipeClientMerchantApi extends ClientApiBase {
    public async Support(supportData: SupportRequestDto): Promise<{}> {
        return this.ApiClient.Post<SupportRequestDto, {}>("/support/", supportData);
    }

    public async Search(searchQuery: string): Promise<SearchResponseDto> {
        const queryParams: SearchRequestQueryData = { query: searchQuery };
        return this.ApiClient.Get<SearchResponseDto>({ Pathname: "/search/", QueryParams: queryParams });
    }
}
