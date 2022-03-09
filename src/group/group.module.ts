import { Module } from "@nestjs/common";
import { GroupService } from "./group.service";

@Module({
    controllers: [GroupController],
    providers: [GroupService]
})
export class GroupModule {}