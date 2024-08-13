TS_DIR = InternetProgramming/TypeScript/playground

run-ts:
	@echo "Current directory: $(CURDIR)"
	@echo "Changing to directory: $(TS_DIR)"
	cd $(TS_DIR) && tsc main.ts && node main.js

run-ts1:
	# Unused: cd $(TS_DIR) && tsc main1.ts --target ES2018 && node main1.js
	@echo "Current directory: $(CURDIR)"
	@echo "Changing to directory $(TS_DIR)"
	cd $(TS_DIR) && tsc && node dist/main1.js