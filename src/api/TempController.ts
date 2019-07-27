import { Controller, Get } from "@nestjs/common";

@Controller("temp")
export class TempController {
	@Get()
	findAll() {
		return "test";
	}
}
