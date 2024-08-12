TS_DIR = InternetProgramming/TypeScript/playground

run-ts:
	@echo "Current directory: $(CURDIR)"
	@echo "Changing to directory: $(TS_DIR)"
	cd $(TS_DIR) && tsc main.ts && node main.js

run-ts-1:
	@echo "Current directory: $(CURDIR)"
	@echo "Changing to directory $(TS_DIR)"
	cd $(TS_DIR) && tsc main-1.ts --target ES2018 && node main-1.js